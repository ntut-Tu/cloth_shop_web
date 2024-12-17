import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../../service/business/product.service";
import { ProductSummaryModel } from "../../../model/product-summary.model";
import { MatDialog } from '@angular/material/dialog';
import {NewStyleProductDetailComponent} from "../new-style-product-detail/new-style-product-detail.component";
import {
  NewStyleVProductDetailComponent
} from "../../vendor/new-style-v-product-detail/new-style-v-product-detail.component";
import {CartComponent} from "../cart/cart.component";
import {CartService} from "../../../service/business/cart.service";
import {onImageError} from "../../../utils/image-utils.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  customerProducts: ProductSummaryModel[] = [];
  currentPage: number = 1;
  pageSize: number = 30;
  userType: string = 'customer';
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
  selectedCategory: string = 'All';
  selectedSortOption: string = '日期';
  sortOptions: { value: string, viewValue: string }[] = [
    { value: 'sold', viewValue: '熱度' },
    { value: 'rate', viewValue: '評分' },
    { value: 'date', viewValue: '日期' }
  ];
  products: any[] = [];
  searchKeyword: string='';
  protected readonly onImageError = onImageError;

  constructor(private productService: ProductService,private dialog: MatDialog,private cartService:CartService) {}

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
        const dialogRef = this.dialog.open(NewStyleProductDetailComponent, {
          width: '600px',
          data: this.detailedProduct, // 將產品數據傳遞到彈窗
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result === 'success') {
            // 手動刷新購物車
            this.cartService.loadInitialCart();
          }
        });
      },
      (error) => {
        console.error('Error loading product details', error);
      }
    );
  }

  onSearch() {
    if(this.searchKeyword!=''){
      this.productService.searchProduct(this.searchKeyword,this.currentPage, this.pageSize).subscribe((response) => {
        if (response.status) {
          this.products = response.data;
        } else {
          console.error(response.message);
        }
      });
    }
  }




}
