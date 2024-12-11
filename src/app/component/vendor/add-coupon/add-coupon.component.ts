import { Component } from '@angular/core';
import {
  BaseDiscountModel,
  DiscountDetailModel,
  mapDiscount,
  SpecialDiscountModel, StandardDiscountModel
} from "../../../model/coupon/coupon.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CouponService} from "../../../service/business/coupon.service";
import {MatDialogRef} from "@angular/material/dialog";
import {CouponApiService} from "../../../service/api/coupon-api.service";

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrl: './add-coupon.component.css'
})
export class AddCouponComponent {
  couponForm: FormGroup;
  couponTypes = [
    {value: 'Seasonal_Discount', label: '季節性優惠'},
    {value: 'Special_Discount', label: '特殊優惠'},
  ];

  constructor(private fb: FormBuilder, private couponService: CouponService) {
    this.couponForm = this.fb.group({
      couponType: ['', Validators.required],
      code: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      discountType: ['ratio', Validators.required], // 默認為百分比折扣
      ratio: [null],
      amount: [null],
      minimumSpend: [null], // 最低消費金額
      buyQuantity: [null],
      giftQuantity: [null],
      buyVariantId: [null],
      giftVariantId: [null],
    });

  }

  onSubmit(): void {
    if (this.couponForm.valid) {
      const formData = this.couponForm.value;

      // 根据类型映射字段
      const discountDetail: DiscountDetailModel = {
        couponId: 0, // 假设这是后端生成的 ID，可以设置为默认值
        code: formData.code,
        type: formData.couponType,
        startDate: formData.startDate,
        endDate: formData.endDate,
        isList: true, // 默认值
        maximumUsagePerCustomer: 1, // 默认值
        discount: this.mapDiscount(formData),
      };

      this.couponService.createCoupon(discountDetail).subscribe(
        (response) => {
          console.log('優惠券創建成功:', response);
        },
        (error) => {
          console.error('優惠券創建失敗:', error);
        }
      );
    } else {
      console.error('表單驗證失敗:', this.couponForm.errors);
    }
  }

  isSeasonal(): boolean {
    return this.couponForm.get('couponType')?.value === 'Seasonal_Discount';
  }

  isSpecial(): boolean {
    return this.couponForm.get('couponType')?.value === 'Special_Discount';
  }

  // shit coding
  private mapDiscount(formData: any): StandardDiscountModel | SpecialDiscountModel {
    if (formData.couponType === 'Special_Discount') {
      return {
        code: formData.code,
        // startDate: formData.startDate,
        // endDate: formData.endDate,
        buyQuantity: formData.buyQuantity,
        giftQuantity: formData.giftQuantity,
        buyVariantId: formData.buyVariantId,
        giftVariantId: formData.giftVariantId,
      } as SpecialDiscountModel;
    }

    if (formData.couponType === 'Seasonal_Discount') {
      return {
        code: formData.code,
        discount_type: formData.discountType,
        // startDate: formData.startDate,
        // endDate: formData.endDate,
        ratio: formData.discountType === 'ratio' ? formData.ratio : null,
        discount_amount: formData.discountType === 'amount' ? formData.amount : null,
        minimumSpend: formData.minimumSpend,
      } as StandardDiscountModel;
    }

    throw new Error('未知的優惠券類型');
  }
}
