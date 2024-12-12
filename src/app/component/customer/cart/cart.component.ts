import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { CartService } from '../../../service/business/cart.service';
import {CartItem} from "../../../model/product-summary.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService,private cdr: ChangeDetectorRef,private router:Router) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cartItems => {
      this.cartItems = cartItems;
      this.cdr.detectChanges();
    });
  }

  updateQuantity(item: CartItem, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const quantity = inputElement.valueAsNumber;

    if (quantity > 0) {
      item.quantity = quantity;
      this.cartService.saveCartToSession(this.cartItems);
    }
  }

  removeItem(item: CartItem): void {
    this.cartService.removeItem(item);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  checkout(): void {
    console.log('結帳!!');
  }
}
