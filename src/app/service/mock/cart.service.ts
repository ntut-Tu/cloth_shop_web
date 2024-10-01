import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<CartItem[]>([]);  // 初始化为空数组
  cart$ = this.cartSubject.asObservable();

  constructor(private cookieService: CookieService) {
    this.loadInitialCart();
  }

  // 初始加载购物车数据
  loadInitialCart(): void {
    const cartItems = this.loadCartFromCookies();
    this.cartSubject.next(cartItems);  // 将购物车数据发布给订阅者
  }

  // 从 cookies 加载购物车数据
  loadCartFromCookies(): CartItem[] {
    const cartData = this.cookieService.get('cart');
    return cartData ? JSON.parse(cartData) : [];  // 如果没有 cookie 则返回空数组
  }

  // 保存购物车数据到 cookies
  saveCartToCookies(cartItems: CartItem[]): void {
    this.cookieService.set('cart', JSON.stringify(cartItems));
    this.cartSubject.next(cartItems);  // 通知订阅者购物车已更新
  }

  // 添加商品到购物车
  addToCart(item: CartItem): void {
    const cartItems = this.loadCartFromCookies();
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.push({ ...item, quantity: 1 });
    }

    this.saveCartToCookies(cartItems);
  }

  // 移除购物车中的商品
  removeItem(item: CartItem): void {
    const cartItems = this.loadCartFromCookies().filter(cartItem => cartItem.id !== item.id);
    this.saveCartToCookies(cartItems);
  }
}
