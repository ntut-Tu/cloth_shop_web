import { Component, Input, OnInit } from '@angular/core';
import {ProductService} from "../../../service/business/product.service";
import {ProductSummaryModel} from "../../../model/product-summary.model";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: ProductSummaryModel[] = [];
  @Input() isVendor: boolean = false;
  selectedProduct: ProductSummaryModel | null = null;
  detailedProduct: any = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Initial load can be handled here if needed
  }

  onLoadDetail(product: ProductSummaryModel) {
    this.selectedProduct = product;

    // Load the detailed information from the service (e.g., by ID)
    this.productService.getProductDetails(product.productId).subscribe(
      (response) => {
        this.detailedProduct = response.data; // Assign detailed data to show in the card
      },
      (error) => {
        console.error("Error loading product details", error);
      }
    );
  }

  closeDetail() {
    this.selectedProduct = null;
    this.detailedProduct = null;
  }
}
