import {Component, Injector, OnInit} from '@angular/core';
import {DiscountSummaryModel} from "../../../model/coupon/coupon.model";
import {CouponService} from "../../../service/business/coupon.service";
import {AdminAddCouponComponent} from "../admin-add-coupon/admin-add-coupon.component";
import {MatDialog} from "@angular/material/dialog";
import {AdminEditCouponComponent} from "../admin-edit-coupon/admin-edit-coupon.component";

@Component({
  selector: 'app-new-style-discount',
  templateUrl: './admin-discount.component.html',
  styleUrl: './admin-discount.component.css'
})
export class AdminDiscountComponent implements OnInit {
  coupons: DiscountSummaryModel[] = [];
  displayedColumns: string[] = ['couponId', 'code', 'discountType', 'startDate', 'endDate', 'isActive','editButton'];

  constructor(private couponService: CouponService, private dialog: MatDialog,private injector :Injector) {}

  ngOnInit(): void {
    this.loadCoupons();
  }

  loadCoupons(): void {
    this.couponService.getCoupons().subscribe(
      (data) => {
        this.coupons = data;
      },
      (error) => {
        console.error('Failed to load coupons', error);
      }
    );
  }

  openAddCouponDialog(): void {
    const dialogRef = this.dialog.open(AdminAddCouponComponent, {
      width: '600px',
      disableClose: true,
      panelClass: 'custom-dialog-container',
      injector: this.injector
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'refresh') {
        this.loadCoupons(); // 如果新增成功，重新加载优惠券列表
      }
    });
  }

  openEditCouponDialog(coupon: DiscountSummaryModel): void {
    const dialogRef = this.dialog.open(AdminEditCouponComponent, {
      data: coupon,
      width: '600px',
      disableClose: true,
      panelClass: 'custom-dialog-container',
      injector: this.injector
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'refresh') {
        this.loadCoupons(); // 如果新增成功，重新加载优惠券列表
      }
    });
  }
}
