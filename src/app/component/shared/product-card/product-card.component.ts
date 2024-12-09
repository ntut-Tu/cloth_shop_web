import { Component, Input, Output, EventEmitter } from '@angular/core';
import {ProductSummaryModel} from "../../../model/product-summary.model";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: ProductSummaryModel;
  @Input() userType: String = "customer";

  // EventEmitter to notify parent when detail needs to be loaded
  @Output() loadDetail = new EventEmitter<ProductSummaryModel>();

  openDetail() {
    // Emit the event to notify the parent component
    this.loadDetail.emit(this.product);
  }

    protected readonly environment = environment;
}
