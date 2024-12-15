import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponseDTO } from '../../model/api-response.model';

import { Review } from '../../model/review/review.model';
import {AddReviewResponse} from "../../model/review/add-review-response.model";


@Injectable({
  providedIn: 'root'
})

export class ProductReviewApiService {
  private apiUrl =  environment.baseUrl + '/api/review';

  constructor(private http: HttpClient) { }

  /**
   * 新增評價
   * @param productId - 產品 ID
   * @param review - 評價資料
   * @returns 新曾評價操作的結果
   */
  addReview(review: Review): Observable<ApiResponseDTO<AddReviewResponse>> {
    const url = `${this.apiUrl}/add`;
    return this.http.post<ApiResponseDTO<AddReviewResponse>>(url, review);
  }

  // /**
  //  * 取得產品評價列表
  //  * @param  productId - 產品 ID
  //  * @returns 包含評價列表的 ApiResponseDTO
  //  */
  // getProductReviews(productId: number): Observable<ApiResponseDTO<Review[]>> {
  //   const url = `${this.apiUrl}/${productId}/reviews`;
  //   return this.http.get<ApiResponseDTO<Review[]>>(url);
  // }
}
