// product-list.component.ts
import { Component, Input } from '@angular/core';
import {ProductModel} from "../../../model/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: ProductModel[] = [];
  @Input() isVendor: boolean = false;
}
