import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ConfirmAmountModel,
  ConfirmAmountResponseModel,
  ConfirmDiscountModel,
  ConfirmDiscountResponseModel
} from "../../model/checkout/confirm-oder.model";
import { ApiResponseDTO } from "../../model/api-response.model";
import {environment} from "../../../environments/environment";
import {SubmitOrderModel} from "../../model/checkout/submit-order.model"; // 假設 ApiResponseDTO 定義在這個路徑

@Injectable({
  providedIn: 'root'
})
export class CheckoutApiService {
  private apiUrl = environment.baseUrl + '/api/checkout'; // API 基礎路徑

  constructor(private http: HttpClient) {}

  /**
   * 向後端發送確認金額請求
   * @param confirmAmount 包含訂單金額資訊的模型
   * @returns 確認金額結果的 Observable，包含通用 API 響應
   */
  confirmOrderAmount(confirmAmount: ConfirmAmountModel): Observable<ApiResponseDTO<ConfirmAmountResponseModel>> {
    return this.http.post<ApiResponseDTO<ConfirmAmountResponseModel>>(`${this.apiUrl}/confirm-amount`, confirmAmount);
  }

  /**
   * 向後端發送折扣確認請求
   * @param discountRequest 包含折扣碼和類型的模型
   * @returns 折扣確認結果的 Observable，包含通用 API 響應
   */
  confirmDiscount(discountRequest: ConfirmDiscountModel): Observable<ApiResponseDTO<ConfirmDiscountResponseModel>> {
    return this.http.post<ApiResponseDTO<ConfirmDiscountResponseModel>>(`${this.apiUrl}/confirm-discount`, discountRequest);
  }

  /**
   * 向後端發送提交訂單請求
   * @param order 包含訂單資訊的模型
   * @returns 提交訂單結果的 Observable，包含通用 API 響應
   */
  submitOrder(order: ConfirmAmountModel): Observable<ApiResponseDTO<any>> {
    return this.http.post<ApiResponseDTO<any>>(`${this.apiUrl}/submit-order`, order);
  }
}
