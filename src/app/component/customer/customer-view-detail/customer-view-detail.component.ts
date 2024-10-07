import { Component, Input } from '@angular/core';
import {CartItem, Product} from '../../../model/product';
import { CartService } from '../../../service/mock/cart.service';

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
      // description: this.product.description,
      price: this.product.price,
      // imageUrl: this.product.imageUrl,
      seller_id: this.product.seller_id,
      seller_name: this.product.seller_name,
      quantity: 1
    };

    this.cartService.addToCart(item);
    console.log('加入購物車:', item);
  }
}
