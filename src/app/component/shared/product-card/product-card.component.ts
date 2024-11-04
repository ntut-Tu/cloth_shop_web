// product-card.component.ts
import { Component, Input } from '@angular/core';
import {Product} from "../../../model/product";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() isVendor: boolean = false;

  selectedProduct: Product | null = null;

  openDetail(product: Product) {
    this.selectedProduct = product;
  }

  closeDetail() {
    this.selectedProduct = null;
  }
}
