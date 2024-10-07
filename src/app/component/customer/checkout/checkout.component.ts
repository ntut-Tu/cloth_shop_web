import { Component } from '@angular/core';
import { CartService } from "../../../service/mock/cart.service";
import { OrderService } from "../../../service/mock/order.service";
import { CartItem } from "../../../model/product";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cartItems: CartItem[] = [];
  cartGroupedBySeller: { [key: string]: CartItem[] } = {};  // 定义 cartGroupedBySeller 作为对象

  constructor(private cartService: CartService, private orderService: OrderService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.loadCartFromCookies();
    this.cartGroupedBySeller = this.groupCartItemsBySeller(this.cartItems);
  }

  groupCartItemsBySeller(items: CartItem[]): { [key: string]: CartItem[] } {
    return items.reduce((acc: { [key: string]: CartItem[] }, item: CartItem) => {
      const sellerKey = item.seller_name;
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
    this.cartService.addToCart(item);  // 更新购物车中的数量
    this.cartGroupedBySeller = this.groupCartItemsBySeller(this.cartItems);  // 重新分组
  }

  removeItem(item: CartItem): void {
    this.cartService.removeItem(item);
    this.cartItems = this.cartService.loadCartFromCookies();  // 更新视图
    this.cartGroupedBySeller = this.groupCartItemsBySeller(this.cartItems);  // 重新分组
  }

  submitOrder(): void {
    // 清除购物车数据
    this.cartService.saveCartToCookies([]);
    this.cartItems = [];  // 重置购物车
    this.cartGroupedBySeller = {};  // 清空商家分组
    alert('Order submitted successfully!');
  }
}
