import { Injectable } from '@angular/core';
import { Review } from '../../model/review/review.model';
import { ProductReviewApiService } from '../api/product-review-api.service';
import {Observable} from "rxjs";
import {ApiResponseDTO} from "../../model/api-response.model";

@Injectable({
  providedIn: 'root'
})

export class ReviewService {

  constructor(private productReviewService: ProductReviewApiService) {}

  /**
   * @param review - 評價資料
   * @returns 新增評價的操作結果
   */
  addReview(review: Review): Observable<ApiResponseDTO<any>> {
    return this.productReviewService.addReview(review);
  }

  // /**
  //  *  取得產品評價列表
  //  *  @param productId - 產品 ID
  //  *  @returns 包含評價列表的 ApiResponseDTO
  //  */
  // getProductReviews(productId: number): Observable<ApiResponseDTO<Review[]>> {
  //   return this.productReviewService.getProductReviews(productId);
  // }
}
