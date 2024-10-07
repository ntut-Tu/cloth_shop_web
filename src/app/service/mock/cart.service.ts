import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import {CartItem} from "../../model/product";



@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor(private cookieService: CookieService) {
    this.loadInitialCart();
  }

  loadInitialCart(): void {
    const cartItems = this.loadCartFromCookies();
    this.cartSubject.next(cartItems);
  }

  loadCartFromCookies(): CartItem[] {
    const cartData = this.cookieService.get('cart');
    return cartData ? JSON.parse(cartData) : [];
  }

  getCartGroupedBySeller(): { [seller_id: number]: CartItem[] } {
    const cartItems = this.loadCartFromCookies();

    return cartItems.reduce((groups, item) => {
      if (!groups[item.seller_id]) {
        groups[item.seller_id] = [];
      }
      groups[item.seller_id].push(item);
      return groups;
    }, {} as { [seller_id: number]: CartItem[] });
  }

  saveCartToCookies(cartItems: CartItem[]): void {
    this.cookieService.set('cart', JSON.stringify(cartItems));
    this.cartSubject.next(cartItems);
  }

  addToCart(item: CartItem): void {
    const cartItems = this.loadCartFromCookies();

    const existingItem = cartItems.find(cartItem => cartItem.id === item.id && cartItem.seller_id === item.seller_id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.push({ ...item, quantity: 1 });
    }

    this.saveCartToCookies(cartItems);
  }

  removeItem(item: CartItem): void {
    const cartItems = this.loadCartFromCookies().filter(cartItem => cartItem.id !== item.id);
    this.saveCartToCookies(cartItems);
  }
}
