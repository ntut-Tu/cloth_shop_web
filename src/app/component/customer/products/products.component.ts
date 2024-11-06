import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../../service/product.service";
import {ProductSummary} from "../../../model/product-summary";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  customerProducts: ProductSummary[] = [];
  currentPage: number = 1;
  pageSize: number = 30;

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productsService.getProductSummaries(this.currentPage, this.pageSize).subscribe((response) => {
      if (response.status) {
        this.customerProducts = response.data;
      } else {
        console.error(response.message);
      }
    });
  }
}
