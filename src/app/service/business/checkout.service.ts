import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { CheckoutApiService } from "../api/checkout-api.service";
import { CartService } from "./cart.service";
import {
  ConfirmAmountModel,
  ConfirmAmountResponseModel,
  ConfirmDiscountModel,
  ConfirmDiscountResponseModel
} from "../../model/checkout/confirm-oder.model";
import { SubmitOrderModel, SubmitOrderResponseModel } from "../../model/checkout/submit-order.model";
import { ApiResponseDTO } from "../../model/api-response.model";
import { CartItem } from "../../model/product/product-summary.model";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  // BehaviorSubject 用於管理訂單數據
  private orderDataSubject = new BehaviorSubject<ConfirmAmountModel | null>(null);
  orderData$ = this.orderDataSubject.asObservable();

  constructor(
    private cartService: CartService,
    private checkoutApiService: CheckoutApiService
  ) {}

  /**
   * 初始化訂單數據
   */
  initializeOrder(): void {
    const cartItems = this.cartService.loadCartFromSession();
    const groupedStoreOrders = this.groupCartItemsByStore(cartItems);
    const orderData: ConfirmAmountModel = {
      store_orders: groupedStoreOrders,
      shipping_discount_code: ''
    };
    this.orderDataSubject.next(orderData);
  }

  /**
   * 按商店分組購物車內容
   */
  private groupCartItemsByStore(items: CartItem[]): ConfirmAmountModel['store_orders'] {
    const grouped = items.reduce((acc, item) => {
      const storeId = item.fkVendorId;
      if (!acc[storeId]) {
        acc[storeId] = {
          store_id: storeId,
          product_variants: []
        };
      }
      acc[storeId].product_variants.push({
        product_variant_id: item.productVariantId,
        quantity: item.quantity
      });
      return acc;
    }, {} as { [storeId: number]: any });

    return Object.values(grouped);
  }

  /**
   * 更新商品數量
   */
  updateQuantity(product: { product_variant_id: number; quantity: number }): void {
    const currentOrder = this.orderDataSubject.getValue();
    if (!currentOrder) return;

    currentOrder.store_orders.forEach(storeOrder => {
      const productToUpdate = storeOrder.product_variants.find(
        p => p.product_variant_id === product.product_variant_id
      );
      if (productToUpdate) {
        productToUpdate.quantity = product.quantity;
      }
    });

    this.orderDataSubject.next(currentOrder); // 更新訂單數據
  }

  /**
   * 移除商品
   */
  removeItem(product: { product_variant_id: number }): void {
    const currentOrder = this.orderDataSubject.getValue();
    if (!currentOrder) return;

    currentOrder.store_orders.forEach(storeOrder => {
      storeOrder.product_variants = storeOrder.product_variants.filter(
        p => p.product_variant_id !== product.product_variant_id
      );
    });

    this.orderDataSubject.next(currentOrder); // 更新訂單數據
    this.cartService.removeItemUsingProductId(product.product_variant_id); // 同步更新購物車
  }

  /**
   * 確認金額
   */
  createReservation(): Observable<ApiResponseDTO<ConfirmAmountResponseModel>> {
    const currentOrder = this.orderDataSubject.getValue();
    if (!currentOrder) throw new Error("Order data is not initialized");
    return this.checkoutApiService.confirmOrderAmount(currentOrder);
  }

  /**
   * 應用折扣碼
   */
  applyDiscount(code: string, type: "order" | "store_order", storeId?: number): Observable<ApiResponseDTO<ConfirmDiscountResponseModel>> {
    const discountRequest: ConfirmDiscountModel = {
      discount_code: code,
      type,
      store_id: storeId
    };
    return this.checkoutApiService.confirmDiscount(discountRequest);
  }

  /**
   * 提交訂單
   */
  submitOrder(orderId: string): Observable<ApiResponseDTO<SubmitOrderResponseModel>> {
    const currentOrder = this.orderDataSubject.getValue();
    if (!currentOrder) throw new Error("Order data is not initialized");

    const submitOrderData: SubmitOrderModel = {
      ...currentOrder,
      order_id: orderId,
      payment_method: 'credit_card',
      credit_card_last_four: '',
      delivery_type: 'delivery',
      pickup_store: '',
      shipping_address: '',
    };
    return this.checkoutApiService.submitOrder(submitOrderData);
  }

  /**
   * 清空訂單
   */
  clearOrder(): void {
    this.orderDataSubject.next(null); // 清空訂單
    this.cartService.saveCartToSession([]); // 清空購物車
  }

  /**
   * 計算總金額（模擬計算）
   */
  calculateTotals(): number[] {
    const currentOrder = this.orderDataSubject.getValue();
    if (!currentOrder) return [0, 0, 0, 0];

    let totalAmount = 0;
    let discountAmount = 0;
    let shippingFee = 50; // 假設固定運費
    currentOrder.store_orders.forEach(storeOrder => {
      storeOrder.product_variants.forEach(product => {
        const price = this.cartService.getCartItemUsingProductId(product.product_variant_id)?.price || 0;
        totalAmount += price * product.quantity;
      });
    });
    const netAmount = totalAmount + shippingFee - discountAmount;
    return [totalAmount, shippingFee, discountAmount, netAmount];
  }

  /**
   * 根據商品變體 ID 獲取價格
   */
  getPriceByVariantId(productVariantId: number): number {
    return this.cartService.getCartItemUsingProductId(productVariantId)?.price || 0;
  }

  cancelOrder(orderId: string): Observable<ApiResponseDTO<any>> {
    return this.checkoutApiService.cancelOrder(orderId);
  }
}
