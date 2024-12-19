import {Component, OnInit, Input, model, Inject } from '@angular/core';
import { ReviewService} from "../../../service/business/review.service";
import { Review} from "../../../model/review/review.model";
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-review',
  templateUrl: './customer-review.component.html',
  styleUrls: ['./customer-review.component.css']
})


export class CustomerReviewComponent implements OnInit {
  newReview: Review = {
    rating: 0,
    comment: '',
    productId: 0
  };
  isFormValid = false;
  isSubmitting = false;

  constructor(
    private snackBar: MatSnackBar,
    private reviewService: ReviewService,
    public dialogRef: MatDialogRef<CustomerReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // 將完成訂單的 productId 注入到 reviewComponent
  ) {}

  ngOnInit(): void {
    this.newReview = {
      rating: 0,
      comment: '',
      productId: this.data.productId
    };
    this.checkFormValidity();
  }

  // 新增評論
  addReview(): void {
    if (this.isFormValid && !this.isSubmitting) {
      this.isSubmitting = true; // 開始提交時設置狀態

      this.reviewService.addReview(this.newReview).subscribe({
        next: (response) => {
          if (response.status) {
            this.snackBar.open(`編號:${response.data.review_id} 日期:${response.data.review_date}`, '關閉', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top'
            });
            this.dialogRef.close('success');
          } else {
            this.snackBar.open(`ERROR:${response.message}` || '評論新增失敗，請稍後再試', '關閉', {
              duration: 3000
            });
          }
        },
        error: (error) => {
          console.error('Error adding review:', error);
          this.snackBar.open('發生錯誤，請稍後再試', '關閉', {
            duration: 3000
          });
        },
        complete: () => {
          this.isSubmitting = false; // 完成時重置狀態
        }
      });
    }
  }


  // 關閉 dialog
  cancel(): void {
    this.dialogRef.close();
  }

  // '送出評論' button dis/enabled
  checkFormValidity(): void {
    this.isFormValid = this.newReview.rating > 0 && this.newReview.comment.trim().length > 0;
  }
}
