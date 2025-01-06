import {Component, Input, OnInit, OnChanges, SimpleChanges, Inject, importProvidersFrom} from '@angular/core';
import { CartService } from '../../../service/business/cart.service';
import { CartItem, ProductDetail, ProductVariant } from "../../../model/product/product-summary.model";
import { environment } from "../../../../environments/environment";
import { PageEvent } from "@angular/material/paginator";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { onImageError } from "../../../utils/image-utils.service";
import { GetReviewResponseDTO } from "../../../model/review/get-review-response.model";
import {ReviewService} from "../../../service/business/review.service";

@Component({
  selector: 'app-customer-view-detail',
  templateUrl: './new-style-product-detail.component.html',
  styleUrls: ['./new-style-product-detail.component.css']
})
export class NewStyleProductDetailComponent implements OnInit {
  selectedVariant: any;
  reviews: GetReviewResponseDTO[] = [];
  currentPage = 1; // 初始頁碼設置為1
  loading = false;
  noMoreReviews = false; // 紀錄是否還有更多評論
  pageSize = 6; // 每頁顯示6則評論

  constructor(
    public dialogRef: MatDialogRef<NewStyleProductDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cartService: CartService,
    private reviewService: ReviewService
  ) {}

  ngOnInit() {
    if (this.data?.productId) {
      this.loadReviews();
    }
  }

  loadReviews() {
    this.loading = true;
    this.reviewService.getProductReviews(this.data.productId, this.currentPage)
      .subscribe({
        next: (response) => {
          if (response.status) {
            this.reviews = response.data;

            // 判斷返回資料是否少於設定 pageSize
            if (response.data.length < this.pageSize) {
              this.noMoreReviews = true;
            }
            else {
              this.currentPage++; // 繼續加載下一頁
            }
          } else {
            console.error('Failed to load reviews:', response.message);
          }
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading reviews:', error);
          this.loading = false;
        }
      });
  }

  // // 需要 totalReviews
  // onPageChange(event: PageEvent): void {
  //   this.currentPage = event.pageIndex + 1; // 更新當前頁碼 this.loadReviews();
  // }

  nextPage() {
    if (!this.noMoreReviews) {
      this.loadReviews();
    }
  }

  prevPage() {
    if (!this.currentPage) {
      this.currentPage--;
      this.loadReviews();
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  onVariantChange(event: any): void {
    const selectedVariantId = event.value;
    this.selectedVariant = this.data.productVariants.find(
      (variant: any) => variant.productVariantId === selectedVariantId
    );
  }

  addToCart(): void {
    if (!this.selectedVariant) {
      alert("請選擇商品款式！");
      return;
    }

    const cartItem = {
      productVariantId: this.selectedVariant.productVariantId,
      name: this.data.name,
      imageUrl: this.data.imageUrl,
      color: this.selectedVariant.color,
      stock: this.selectedVariant.stock,
      size: this.selectedVariant.size,
      price: this.selectedVariant.price,
      quantity: 1,
      fkVendorId: this.data.fkVendorId,
      storeDescription: this.data.storeDescription,
      storeName: this.data.storeName,
      storeImageUrl: this.data.storeLogoUrl
    };

    this.cartService.addToCart(cartItem);
    alert('商品已加入購物車！');
    this.dialogRef.close('success');
  }

  protected readonly environment = environment;
  protected readonly onImageError = onImageError;
}
