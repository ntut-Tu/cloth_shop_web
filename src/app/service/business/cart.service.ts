import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from "../../model/product-summary.model";
import {CheckoutBaseProductVariantModel} from "../../model/checkout/shared-checkout.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable(); // 提供購物車的實時訂閱

  constructor() {
    this.loadInitialCart();
  }

  /**
   * 初始化購物車數據
   */
  private loadInitialCart(): void {
    const cartItems = this.loadCartFromSession();
    this.cartSubject.next(cartItems);
  }

  /**
   * 從 sessionStorage 加載購物車內容
   * @returns 購物車商品列表
   */
  loadCartFromSession(): CartItem[] {
    const cartData = sessionStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
  }

  /**
   * 保存購物車內容到 sessionStorage
   * @param cartItems 購物車商品列表
   */
  saveCartToSession(cartItems: CartItem[]): void {
    sessionStorage.setItem('cart', JSON.stringify(cartItems));
    this.cartSubject.next(cartItems);
  }

  /**
   * 新增商品到購物車
   * @param item 要新增的商品
   */
  addToCart(item: CartItem): void {
    const cartItems = this.loadCartFromSession();
    const existingItem = cartItems.find(
      cartItem => cartItem.productVariantId === item.productVariantId && cartItem.fkVendorId === item.fkVendorId
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.push({ ...item, quantity: 1 });
    }

    this.saveCartToSession(cartItems);
  }

  /**
   * 更新商品數量
   * @param item 商品項目
   */
  updateQuantity(item: CheckoutBaseProductVariantModel): void {
    const cartItems = this.loadCartFromSession().map(cartItem =>
      cartItem.productVariantId === item.product_variant_id
        ? { ...cartItem, quantity: Math.max(1, item.quantity) }
        : cartItem
    );
    this.saveCartToSession(cartItems);
  }

  /**
   * 移除商品
   * @param item 要移除的商品
   */
  removeItem(item: CartItem): void {
    const cartItems = this.loadCartFromSession().filter(
      cartItem => cartItem.productVariantId !== item.productVariantId || cartItem.fkVendorId !== item.fkVendorId
    );
    this.saveCartToSession(cartItems);
  }
  /**
   * 移除商品
   * @param item 要移除的商品id
   */
  removeItemUsingProductId(id :any): void {
    const cartItems = this.loadCartFromSession().filter(
      cartItem => cartItem.productVariantId !== id
    );
    this.saveCartToSession(cartItems);
  }
  /**
   * 取得商品細節
   * @param item 要取得的商品id
   */
  getCartItemUsingProductId(id :any): CartItem {
    return <CartItem>this.loadCartFromSession().find(
      cartItem => cartItem.productVariantId === id
    );
  }
}
