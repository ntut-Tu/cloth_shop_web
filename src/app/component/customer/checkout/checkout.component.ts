import { Component, OnInit } from '@angular/core';
import { CartService } from "../../../service/mock/cart.service";
import {CartItem} from "../../../model/product-summary.model";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartGroupedBySeller: { [key: string]: CartItem[] } = {};

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.loadCartFromSession();
    this.cartGroupedBySeller = this.groupCartItemsBySeller(this.cartItems);
  }

  groupCartItemsBySeller(items: CartItem[]): { [key: string]: CartItem[] } {
    return items.reduce((acc: { [key: string]: CartItem[] }, item: CartItem) => {
      const sellerKey = item.storeDescription;
      if (!acc[sellerKey]) {
        acc[sellerKey] = [];
      }
      acc[sellerKey].push(item);
      return acc;
    }, {});
  }

  calculateTotalPrice(items: CartItem[]): number {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  calculateGrandTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  updateQuantity(item: CartItem): void {
    if (item.quantity < 1) {
      item.quantity = 1;
    }
    this.cartService.saveCartToSession(this.cartItems);
    this.cartGroupedBySeller = this.groupCartItemsBySeller(this.cartItems);
  }

  removeItem(item: CartItem): void {
    this.cartService.removeItem(item);
    this.cartItems = this.cartService.loadCartFromSession();
    this.cartGroupedBySeller = this.groupCartItemsBySeller(this.cartItems);
  }

  submitOrder(): void {
    this.cartService.saveCartToSession([]);
    this.cartItems = [];
    this.cartGroupedBySeller = {};
    alert('Order submitted successfully!');
  }
}
