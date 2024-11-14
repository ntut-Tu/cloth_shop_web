import { Component } from '@angular/core';
import {SalesReportService} from "../../../service/mock/sales-report.service";
import {Discount} from "../../../model/outdated/discount.model";
import {DiscountManageService} from "../../../service/mock/discount-manage.service";
import {LocalTimeService} from "../../../service/business/local-time.service";

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrl: './discount.component.css'
})
export class DiscountComponent {
  discounts: Discount[] = [];
  nowTime:number=0;
  toggledOrderIndex: number | null = null;

  constructor(private discountManageService:DiscountManageService,private localTimeService:LocalTimeService) {}
  ngOnInit(): void {
    this.discountManageService.getDiscountList().subscribe((discounts) => {
      this.discounts = discounts;
    });
    this.nowTime=this.localTimeService.getDateWithNumberForm();
  }

  toggleDetails(index: number): void {
    this.toggledOrderIndex = this.toggledOrderIndex === index ? null : index;
  }
}
