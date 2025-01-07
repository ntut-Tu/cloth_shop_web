import {Component, Input, OnInit, OnChanges, SimpleChanges, Inject} from '@angular/core';
import { CartService } from '../../../service/business/cart.service';
import { CartItem, ProductDetail, ProductVariant } from "../../../model/product/product-summary.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {onImageError} from "../../../utils/image-utils.service";
import {GetReviewResponseDTO} from "../../../model/review/get-review-response.model";
import {ReviewService} from "../../../service/business/review.service";

@Component({
  selector: 'app-guest-view-detail',
  templateUrl: './guest-view-detail.component.html',
  styleUrls: ['./guest-view-detail.component.css']
})
export class GuestViewDetailComponent implements OnInit {
  selectedVariant: any;
  reviews: GetReviewResponseDTO[] = [];
  currentPage: number = 1; // 初始頁碼設置為1
  loading = false;
  noMoreReviews = false; // 紀錄是否還有更多評論
  pageSize = 6; // 每頁顯示6則評論

  constructor(
    public dialogRef: MatDialogRef<GuestViewDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
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
    const selectedVariantId = event.value; // Material 的事件返回值
    this.selectedVariant = this.data.productVariants.find(
      (variant: any) => variant.productVariantId == selectedVariantId
    );
  }

  addToCart(): void {
    console.log('Add to cart:', this.selectedVariant);
    alert('請登入後再加入購物車！');
    this.dialogRef.close();
  }

  protected readonly onImageError = onImageError;
}
