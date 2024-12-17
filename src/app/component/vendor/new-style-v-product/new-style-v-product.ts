import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/business/product.service';
import { ProductSummaryModel } from '../../../model/product/product-summary.model';
import {ApiResponseDTO} from "../../../model/api-response.model";
import {Observable} from "rxjs";
import {NewStyleVProductDetailComponent} from "../new-style-v-product-detail/new-style-v-product-detail.component";
import {MatDialog} from "@angular/material/dialog";


interface ProductVariant {
  productVariantId: number;
  color: string;
  size: string;
  price: number;
}

interface ProductSummaryModelWithVariants extends ProductSummaryModel {
  productVariants: ProductVariant[];
}

@Component({
  selector: 'app-new-feature-test',
  templateUrl: './new-style-v-product.html',
  styleUrls: ['./new-style-v-product.css']
})

export class NewStyleVProduct implements OnInit {
  // products: ProductSummaryModel[] = [];
  customerProducts: ProductSummaryModel[] = [];
  currentPage: number = 1;
  pageSize: number = 30;
  userType: string = 'vendor';
  detailedProduct: any = null;
  selectedVariant: any = null;
  categories:{ value: string, viewValue: string }[] = [
    { value: 'All', viewValue: '全部' },
    { value: 'Cloth', viewValue: '衣服' },
    { value: 'Pants', viewValue: '褲子' },
    { value: 'Shoes', viewValue: '鞋子' },
    { value: 'Accessories', viewValue: '配件' },
    { value: 'Other', viewValue: '其他' }
  ];
  selectedCategory: string = '全部';
  selectedSortOption: string = '日期';
  sortOptions: { value: string, viewValue: string }[] = [
    { value: 'sold', viewValue: '熱度' },
    { value: 'rate', viewValue: '評分' },
    { value: 'date', viewValue: '日期' }
  ];
  products: any[] = [];

  constructor(private productService: ProductService,private dialog: MatDialog) {}

  ngOnInit(): void {
    this.productService.getProductSummaries(this.currentPage, this.pageSize).subscribe((response) => {
      if (response.status) {
        this.products = response.data;
      } else {
        console.error(response.message);
      }
    });
  }


  onCategorySelect(category: string) {
    this.selectedCategory = category;
    this.productService.getProductSummariesByCategory(category,this.currentPage, this.pageSize).subscribe((response) => {
      if (response.status) {
        this.products = response.data;
      } else {
        console.error(response.message);
      }
    });
  }
  onLoadDetail(product: any): void {
    this.productService.getProductDetails(product.productId).subscribe(
      (response) => {
        this.detailedProduct = response.data;
        this.dialog.open(NewStyleVProductDetailComponent, {
          width: '600px',
          data: this.detailedProduct, // 將產品數據傳遞到彈窗
        });
      },
      (error) => {
        console.error('Error loading product details', error);
      }
    );
  }
}