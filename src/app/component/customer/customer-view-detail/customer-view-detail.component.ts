import { Component, Input } from '@angular/core';
import { Product } from '../../../model/product';
import { CartService, CartItem } from '../../../service/mock/cart.service';

@Component({
  selector: 'app-customer-view-detail',
  templateUrl: './customer-view-detail.component.html',
  styleUrls: ['./customer-view-detail.component.css']
})
export class CustomerViewDetailComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService) {}

  addToCart() {
    const item: CartItem = {
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      quantity: 1
    };
    this.cartService.addToCart(item);
    console.log('加入購物車:', item);
  }
}
