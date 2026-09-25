import {Component, OnInit} from '@angular/core';
import {Order} from '../../../model/outdated/order.model';
import {SalesReportService} from "../../../service/mock/sales-report.service";

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrl: './sales-report.component.css'
})
export class SalesReportComponent implements OnInit {
  orders: Order[] = [];
  toggledOrderIndex: number | null = null;

  constructor(private salesReportService: SalesReportService) {}
  ngOnInit(): void {
    this.salesReportService.getSales().subscribe((orders) => {
      this.orders = orders;
    });
  }

  toggleDetails(index: number): void {
    this.toggledOrderIndex = this.toggledOrderIndex === index ? null : index;
  }
}
