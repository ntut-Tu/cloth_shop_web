// product-list.component.ts
import { Component, Input } from '@angular/core';
import {Product} from "../../../model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Input() isVendor: boolean = false;
}
