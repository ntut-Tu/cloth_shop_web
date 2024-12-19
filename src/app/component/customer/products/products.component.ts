import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../service/business/product.service";
import {MatDialog} from '@angular/material/dialog';
import {NewStyleProductDetailComponent} from "../new-style-product-detail/new-style-product-detail.component";
import {CartService} from "../../../service/business/cart.service";
import {onImageError} from "../../../utils/image-utils.service";
import {ProductSummaryV2ResponseDTO} from "../../../model/product/product-summary-v2.model";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  currentPage: number = 1;
  pageSize: number = 30;
  userType: string = 'customer';
  detailedProduct: any = null;
  categories: { value: string, viewValue: string }[] = [
    { value: 'All', viewValue: '全部' },
    { value: 'Cloth', viewValue: '衣服' },
    { value: 'Pants', viewValue: '褲子' },
    { value: 'Shoes', viewValue: '鞋子' },
    { value: 'Accessories', viewValue: '配件' },
    { value: 'Other', viewValue: '其他' }
  ];
  selectedCategory: string = 'All';
  selectedSortOption: string = 'date';
  sortOptions: { value: string, viewValue: string }[] = [
    { value: 'sold', viewValue: '熱度' },
    { value: 'rate', viewValue: '評分' },
    { value: 'price_asc', viewValue: '金額(升序)' },
    { value: 'price_desc', viewValue: '金額(降序)' },
    { value: 'date', viewValue: '日期' }
  ];
  products: ProductSummaryV2ResponseDTO[] = [];
  searchKeyword: string = '';
  totalProducts: number = 0;
  protected readonly onImageError = onImageError;

  constructor(private productService: ProductService, private dialog: MatDialog, private cartService: CartService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts({
      page: this.currentPage,
      pageSize: this.pageSize,
      category: this.selectedCategory === 'All' ? null : this.selectedCategory,
      sort: this.selectedCategory === 'All' ? this.selectedSortOption : null,
      search: this.searchKeyword || null,
      role: this.userType
    }).subscribe((response) => {
      if (response.status) {
        this.products = response.data.items;
        this.totalProducts = response.data.totalRecords;
      } else {
        console.error(response.message);
      }
    });
  }

  onCategorySelect(category: string): void {
    this.selectedCategory = category;
    this.loadProducts();
  }

  onSearch(): void {
    this.loadProducts();
  }

  onLoadDetail(product: ProductSummaryV2ResponseDTO): void {
    this.productService.getProductDetails(product.productId).subscribe(
      (response) => {
        this.detailedProduct = response.data;
        const dialogRef = this.dialog.open(NewStyleProductDetailComponent, {
          width: '600px',
          data: this.detailedProduct,
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result === 'success') {
            this.cartService.loadInitialCart();
          }
        });
      },
      (error) => {
        console.error('Error loading product details', error);
      }
    );
  }

  onPageChange($event: PageEvent) {
    this.currentPage = $event.pageIndex + 1; // MatPaginator 的頁索引從 0 開始
    this.pageSize = $event.pageSize;
    this.loadProducts();
  }
}
