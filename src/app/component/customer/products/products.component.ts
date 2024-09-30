// products.component.ts
import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../../model/product.model";
import {ProductService} from "../../../service/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  customerProducts: ProductModel[] = [];

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.customerProducts = products;
    });
  }
}
