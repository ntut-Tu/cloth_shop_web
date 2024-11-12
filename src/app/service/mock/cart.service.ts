import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {CartItem} from "../../model/product-summary.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor() {
    this.loadInitialCart();
  }

  loadInitialCart(): void {
    const cartItems = this.loadCartFromSession();
    this.cartSubject.next(cartItems);
  }

  loadCartFromSession(): CartItem[] {
    const cartData = sessionStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
  }

  getCartGroupedBySeller(): { [fkVendorId: number]: CartItem[] } {
    const cartItems = this.loadCartFromSession();
    return cartItems.reduce((groups, item) => {
      if (!groups[item.fkVendorId]) {
        groups[item.fkVendorId] = [];
      }
      groups[item.fkVendorId].push(item);
      return groups;
    }, {} as { [fkVendorId: number]: CartItem[] });
  }

  saveCartToSession(cartItems: CartItem[]): void {
    sessionStorage.setItem('cart', JSON.stringify(cartItems));
    this.cartSubject.next(cartItems);
  }

  addToCart(item: CartItem): void {
    console.log("Item to add:", item);

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

  removeItem(item: CartItem): void {
    const cartItems = this.loadCartFromSession().filter(
      cartItem => cartItem.productVariantId !== item.productVariantId || cartItem.fkVendorId !== item.fkVendorId
    );
    this.saveCartToSession(cartItems);
  }
}
