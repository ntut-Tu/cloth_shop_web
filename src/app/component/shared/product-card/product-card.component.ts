// product-card.component.ts
import { Component, Input } from '@angular/core';
import {ProductModel} from "../../../model/product.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: ProductModel;
  @Input() isVendor: boolean = false;

  selectedProduct: ProductModel | null = null;

  openDetail(product: ProductModel) {
    this.selectedProduct = product;
  }

  closeDetail() {
    this.selectedProduct = null;
  }
}
