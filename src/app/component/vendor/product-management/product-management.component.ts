// product-management.component.ts
import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../../model/product.model";
import {ProductService} from "../../../service/products.service";

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  vendorProducts: ProductModel[] = [];

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.vendorProducts = products;
    });
  }
}
