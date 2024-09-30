// customer-view-detail.component.ts
import { Component, Input } from '@angular/core';
import {ProductModel} from "../../../model/product.model";

@Component({
  selector: 'app-customer-view-detail',
  templateUrl: './customer-view-detail.component.html',
  styleUrls: ['./customer-view-detail.component.css']
})
export class CustomerViewDetailComponent {
  @Input() product!: ProductModel;

  addToCart() {
    console.log('加入購物車:', this.product);
    // 購物車邏輯
  }
}
