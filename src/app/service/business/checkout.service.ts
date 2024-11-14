import { Injectable } from '@angular/core';
import { CartItem } from "../../model/product-summary.model";
import {
  ConfirmAmountModel,
  ConfirmAmountResponseModel,
  ConfirmDiscountModel,
  ConfirmDiscountResponseModel
} from "../../model/checkout/confirm-oder.model";
import { CartService } from "../mock/cart.service";
import { CheckoutApiService } from "../api/checkout-api.service";
import {CheckoutBaseProductVariantModel, CheckoutBaseStoreOrderModel} from "../../model/checkout/shared-checkout.model";
import { ApiResponseDTO } from "../../model/api-response.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  cartItems: CartItem[] = []; // 購物車中的商品項目
  storeOrders: ConfirmAmountModel['store_orders'] = []; // 按商店分組的訂單
  private appliedCoupons: { [key: string]: { code: string, type: 'ratio' | 'absolute' | 'gift' } } = {}; // 優惠券資訊

  constructor(
    private cartService: CartService,
    private checkoutApiService: CheckoutApiService
  ) {}

  /**
   * 載入購物車中的商品，並按商店進行分組
   */
  loadCartItems(): void {
    this.cartItems = this.cartService.loadCartFromSession();
    this.storeOrders = this.groupCartItemsBySeller(this.cartItems);
  }

  /**
   * 將購物車中的商品按商店分組
   * @param items 購物車中的商品列表
   * @returns 按商店分組的商品訂單
   */
  groupCartItemsBySeller(items: CartItem[]): ConfirmAmountModel['store_orders'] {
    const grouped = items.reduce((acc: { [key: number]: CheckoutBaseStoreOrderModel }, item: CartItem) => {
      const storeId = item.fkVendorId;
      if (!acc[storeId]) {
        acc[storeId] = {
          store_id: storeId,
          special_discount_code: '',
          seasonal_discount_code: '',
          product_variants: []
        };
      }
      acc[storeId].product_variants.push({
        product_variant_id: item.productVariantId,
        quantity: item.quantity
      });
      return acc;
    }, {});

    return Object.values(grouped);
  }

  /**
   * 計算單個商店的總金額
   * @param storeOrder 商店訂單
   * @returns 該商店的總金額
   */
  calculateStoreTotal(storeOrder: CheckoutBaseStoreOrderModel): number {
    return storeOrder.product_variants.reduce((total, item) => {
      const price = this.getProductPrice(item.product_variant_id);
      return total + (price * item.quantity);
    }, 0);
  }

  /**
   * 獲取商品的價格（此方法需要根據實際需求實現）
   * @param productVariantId 商品變體ID
   * @returns 該商品的單價
   */
  getProductPrice(productVariantId: number): number {
    const item = this.cartItems.find(cartItem => cartItem.productVariantId === productVariantId);
    return item ? item.price : 0;
  }

  /**
   * 更新商品數量並重新分組
   * @param item 要更新的購物車項目
   */
  updateQuantity(item: CartItem | CheckoutBaseProductVariantModel): void {
    if (item.quantity < 1) {
      item.quantity = 1;
    }

    // 判斷是否為 CartItem 類型，並執行相應操作
    if ('productVariantId' in item) {
      this.cartService.saveCartToSession(this.cartItems);
      this.storeOrders = this.groupCartItemsBySeller(this.cartItems);
    } else {
      // 若為 CheckoutBaseProductVariantModel 類型，找到相應的 CartItem 並更新
      const cartItem = this.cartItems.find(cartItem => cartItem.productVariantId === item.product_variant_id);
      if (cartItem) {
        cartItem.quantity = item.quantity;
        this.cartService.saveCartToSession(this.cartItems);
        this.storeOrders = this.groupCartItemsBySeller(this.cartItems);
      }
    }
  }

  /**
   * 刪除購物車中的商品
   * @param item 要刪除的購物車項目
   */
  removeItem(item: CartItem | CheckoutBaseProductVariantModel): void {
    if ('productVariantId' in item) {
      // CartItem 類型的處理
      this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
    } else {
      // CheckoutBaseProductVariantModel 類型的處理
      this.cartItems = this.cartItems.filter(cartItem => cartItem.productVariantId !== item.product_variant_id);
    }

    this.cartService.saveCartToSession(this.cartItems);
    this.storeOrders = this.groupCartItemsBySeller(this.cartItems);
  }

  /**
   * 計算總金額、折扣和其他相關金額
   * @returns 總金額的 Observable
   */
  calculateTotals(): Observable<ApiResponseDTO<ConfirmAmountResponseModel>> {
    const confirmAmount: ConfirmAmountModel = {
      store_orders: this.storeOrders,
      shipping_discount_code: '' // 假設有一個折扣碼
    };
    return this.checkoutApiService.confirmOrderAmount(confirmAmount);
  }

  /**
   * 應用折扣碼並確認其有效性
   * @param code 折扣碼
   * @param type 折扣類型（訂單或商店訂單）
   * @param storeId 商店 ID（僅當 type 為商店訂單時使用）
   * @returns 折扣確認結果的 Observable
   */
  applyDiscount(code: string, type: 'order' | 'store_order', storeId?: number): Observable<ApiResponseDTO<ConfirmDiscountResponseModel>> {
    const discountRequest: ConfirmDiscountModel = { discount_code: code, type, store_id: storeId };
    return this.checkoutApiService.confirmDiscount(discountRequest);
  }

  /**
   * 提交訂單並清空購物車
   */
  submitOrder(): void {
    this.cartService.saveCartToSession([]);
    this.cartItems = [];
    this.storeOrders = [];
  }
}
