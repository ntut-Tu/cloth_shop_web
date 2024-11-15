import { Injectable } from '@angular/core';
import { CartItem } from "../../model/product-summary.model";
import { ConfirmAmountModel, ConfirmAmountResponseModel, ConfirmDiscountModel, ConfirmDiscountResponseModel } from "../../model/checkout/confirm-oder.model";
import { BehaviorSubject, Observable } from "rxjs";
import { CartService } from "./cart.service";
import { CheckoutApiService } from "../api/checkout-api.service";
import { ApiResponseDTO } from "../../model/api-response.model";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
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
   * 將購物車內容按商店分組
   * @param items 購物車內容
   * @returns 按商店分組的訂單
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
   * 應用折扣碼
   */
  applyDiscount(code: string | undefined, type: "order" | "store_order", storeId?: number): Observable<ApiResponseDTO<ConfirmDiscountResponseModel>> {
    const discountRequest: ConfirmDiscountModel = {
      discount_code: code ?? "", // Default to an empty string if code is undefined
      type,
      store_id: storeId
    };
    return this.checkoutApiService.confirmDiscount(discountRequest);
  }


  /**
   * 計算訂單總金額
   */
  calculateTotals(): Observable<ApiResponseDTO<ConfirmAmountResponseModel>> {
    const currentOrder = this.orderDataSubject.getValue();
    if (!currentOrder) throw new Error("Order data is not initialized");
    return this.checkoutApiService.confirmOrderAmount(currentOrder);
  }

  /**
   * 提交訂單數據
   */
  submitOrder(): void {
    const currentOrder = this.orderDataSubject.getValue();
    if (currentOrder) {
      this.checkoutApiService.submitOrder(currentOrder).subscribe(() => {
        this.clearOrder();
      });
    }
  }

  /**
   * 清空訂單
   */
  clearOrder(): void {
    this.orderDataSubject.next(null);
    this.cartService.saveCartToSession([]); // 清空購物車
  }
}
