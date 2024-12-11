import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DiscountSummaryModel, DiscountDetailModel } from '../../model/coupon/coupon.model';
import { ApiResponseDTO } from '../../model/api-response.model';
import {CouponApiService} from "../api/coupon-api.service";

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  constructor(private couponApi: CouponApiService) {}

  /**
   * 創建優惠券
   * @param discountDetail - 優惠券詳情
   * @returns Observable，返回新優惠券 ID
   */
  createCoupon(discountDetail: DiscountDetailModel): Observable<number> {
    return this.couponApi.createCoupon(discountDetail).pipe(
      map((response: ApiResponseDTO<number>) => response.data)
    );
  }

  /**
   * 獲取優惠券列表
   * @returns Observable，返回優惠券列表
   */
  getCoupons(): Observable<DiscountSummaryModel[]> {
    return this.couponApi.getCoupons().pipe(
      map((response: ApiResponseDTO<DiscountSummaryModel[]>) => response.data)
    );
  }

  /**
   * 獲取優惠券詳情
   * @param couponId - 優惠券的唯一標識符
   * @returns Observable，返回優惠券詳情
   */
  getCouponDetails(couponId: number): Observable<DiscountDetailModel> {
    return this.couponApi.getCouponDetails(couponId).pipe(
      map((response: ApiResponseDTO<DiscountDetailModel>) => response.data)
    );
  }

  /**
   * 更新優惠券狀態
   * @param couponId - 優惠券的唯一標識符
   * @param isActive - 新的優惠券狀態
   * @returns Observable，返回更新結果 (是否成功)
   */
  updateCoupon(couponId: number, isActive: boolean): Observable<boolean> {
    return this.couponApi.updateCoupon(couponId, isActive).pipe(
      map((response: ApiResponseDTO<boolean>) => response.data)
    );
  }
}
