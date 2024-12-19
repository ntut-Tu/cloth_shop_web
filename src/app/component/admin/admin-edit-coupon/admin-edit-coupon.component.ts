import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CouponService } from '../../../service/business/coupon.service';

@Component({
  selector: 'app-edit-coupon',
  templateUrl: './admin-edit-coupon.component.html',
  styleUrls: ['./admin-edit-coupon.component.css'],
})
export class AdminEditCouponComponent implements OnInit {
  couponForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private couponService: CouponService,
    public dialogRef: MatDialogRef<AdminEditCouponComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { discountId: number; isActive: boolean }
  ) {
    this.couponForm = this.fb.group({
      isActive: [data.isActive],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.couponForm.valid) {
      // 調用服務更新資料
      this.couponService.updateCoupon(this.data.discountId,this.couponForm.value.isActive).subscribe(
        () => {
          console.log('優惠狀態更新成功');
          this.dialogRef.close('refresh'); // 更新成功後關閉對話框並通知刷新
        },
        (error) => {
          console.error('優惠狀態更新失敗', error);
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close(); // 關閉對話框但不執行任何操作
  }
}
