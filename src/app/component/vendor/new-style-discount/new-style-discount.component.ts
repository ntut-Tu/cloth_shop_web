import {Component, OnInit} from '@angular/core';
import {DiscountSummaryModel} from "../../../model/coupon/coupon.model";
import {CouponService} from "../../../service/business/coupon.service";
import {AddCouponComponent} from "../add-coupon/add-coupon.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-new-style-discount',
  templateUrl: './new-style-discount.component.html',
  styleUrl: './new-style-discount.component.css'
})
export class NewStyleDiscountComponent implements OnInit {
  coupons: DiscountSummaryModel[] = [];
  displayedColumns: string[] = ['couponId', 'code', 'discountType', 'startDate', 'endDate', 'isActive'];

  constructor(private couponService: CouponService, private dialog: MatDialog) {}

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
    const dialogRef = this.dialog.open(AddCouponComponent, {
      width: '600px',
      disableClose: true,
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'refresh') {
        this.loadCoupons(); // 如果新增成功，重新加载优惠券列表
      }
    });
  }
}
