import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseDTO } from '../../model/api-response.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {DiscountDetailModel, DiscountSummaryModel} from '../../model/coupon/coupon.model';

@Injectable({
  providedIn: 'root',
})
export class CouponApiService {
  private apiUrl = environment.baseUrl + '/api/coupons';

  constructor(private http: HttpClient) {}

  /**
   * 創建優惠券
   * @param discountDetail - 優惠券詳情
   * @returns Observable，包含 ApiResponseDTO 與創建結果 (新優惠券 ID)
   */
  createCoupon(discountDetail: DiscountDetailModel): Observable<ApiResponseDTO<number>> {
    return this.http.post<ApiResponseDTO<number>>(`${this.apiUrl}/create`, discountDetail);
  }

  /**
   * 獲取優惠券列表
   * @returns Observable，包含 ApiResponseDTO 與優惠券列表
   */
  getCoupons(): Observable<ApiResponseDTO<DiscountSummaryModel[]>> {
    return this.http.get<ApiResponseDTO<DiscountSummaryModel[]>>(`${this.apiUrl}/list`);
  }

  /**
   * 獲取優惠券詳情
   * @param couponId - 優惠券的唯一標識符
   * @returns Observable，包含 ApiResponseDTO 與優惠券詳情
   */
  getCouponDetails(couponId: number): Observable<ApiResponseDTO<DiscountDetailModel>> {
    return this.http.get<ApiResponseDTO<DiscountDetailModel>>(`${this.apiUrl}/details/${couponId}`);
  }

  /**
   * 更新優惠券狀態
   * @param couponId - 優惠券的唯一標識符
   * @param isActive - 新的優惠券狀態 (true 表示啟用, false 表示停用)
   * @returns Observable，包含 ApiResponseDTO 與更新結果
   */
  updateCoupon(couponId: number, isActive: boolean): Observable<ApiResponseDTO<boolean>> {
    return this.http.post<ApiResponseDTO<boolean>>(`${this.apiUrl}/update/${couponId}`, { isActive });
  }
}
