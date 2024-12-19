import {Component, OnInit} from '@angular/core';
import {
  BaseDiscountModel,
  DiscountDetailModel,
  mapDiscount,
  SpecialDiscountModel, StandardDiscountModel
} from "../../../model/coupon/coupon.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CouponService} from "../../../service/business/coupon.service";
import {MatDialogRef} from "@angular/material/dialog";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {CouponApiService} from "../../../service/api/coupon-api.service";
import {ProductService} from "../../../service/business/product.service";
import {ProductInfo} from "../../../model/product/product-summary-v2.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-coupon',
  templateUrl: './admin-add-coupon.component.html',
  styleUrl: './admin-add-coupon.component.css'
})
export class AdminAddCouponComponent implements OnInit {
  couponForm: FormGroup;
  couponTypes = [
    {value: 'Shipping_Discount', label: '運費優惠'}
  ];
  productLists: ProductInfo[] = [];

  constructor(private dialogRef: MatDialogRef<AdminAddCouponComponent>, private snackBar: MatSnackBar, private fb: FormBuilder, private couponService: CouponService, private productService: ProductService) {
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

  ngOnInit() {
    this.onLoadProductList();
  }

  onLoadProductList(): void {
    this.productService.getProductListForCoupon().subscribe(
      (response) => {
        this.productLists = response.data;
        console.log('商品列表:', response);
      },
      (error) => {
        console.error('加載商品列表失敗:', error);
      }
    );
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
          this.snackBar.open(`優惠券創建成功`, '關閉', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
          this.dialogRef.close("refresh");
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
    return this.couponForm.get('couponType')?.value === 'Shipping_Discount';
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

    if (formData.couponType === 'Shipping_Discount') {
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
