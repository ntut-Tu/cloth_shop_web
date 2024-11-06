import { Component, Input, Output, EventEmitter } from '@angular/core';
import {ProductSummary} from "../../../model/product-summary";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: ProductSummary;
  @Input() isVendor: boolean = false;

  // EventEmitter to notify parent when detail needs to be loaded
  @Output() loadDetail = new EventEmitter<ProductSummary>();

  openDetail() {
    // Emit the event to notify the parent component
    this.loadDetail.emit(this.product);
  }
}
