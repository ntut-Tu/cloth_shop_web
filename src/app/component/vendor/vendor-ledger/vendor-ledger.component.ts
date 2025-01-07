import { Component, OnInit } from '@angular/core';
import { LedgerService } from "../../../service/business/ledger-service";
import { VendorLedger } from "../../../model/ledger/vendor-ledger.model";
import {Color} from "@swimlane/ngx-charts";
import {group} from "@angular/animations";

@Component({
  selector: 'app-vendor-ledger',
  templateUrl: './vendor-ledger.component.html',
  styleUrls: ['./vendor-ledger.component.css']
})
export class VendorLedgerComponent implements OnInit {
  ledgerData: VendorLedger[] = [];
  displayedColumns: string[] = ['ledgerEntryId', 'ledgerType', 'transactionType', 'amount', 'transactionDate','totalAmount'];

  barChartData: any[] = [];
  lineChartData: any[] = [];
  view: [number, number] = [700, 400]; // 图表宽高




  constructor(private ledgerService: LedgerService) {}

  ngOnInit() {
    this.ledgerService.getVendorLedger().subscribe(response => {
      if (response.status) {
        this.ledgerData = response.data;

        this.barChartData = this.calculateBarChartData(this.ledgerData);

        this.lineChartData = this.calculateLineChartData(this.ledgerData);
      } else {
        alert(`ERROR: ${response.message}`);
      }
    });
  }

  calculateBarChartData(data: VendorLedger[]): any[] {
    const income = data.filter(d => d.transactionType == "income").reduce((sum, item) => sum + item.amount, 0);
    const expense = data.filter(d => d.transactionType == "fee").reduce((sum, item) => sum + item.amount, 0);
    return [
      { name: '收入', value: income },
      { name: '支出', value: expense }
    ];
  }

  calculateLineChartData(data: VendorLedger[]): any[] {
    const groupedByDate = data.reduce((acc, item) => {
      if (!item.transactionDate) {
        console.warn('Missing transactionDate:', item);
        return acc; // 跳過無效數據
      }

      const date = new Date(item.transactionDate); // 嘗試解析日期
      if (isNaN(date.getTime())) {
        console.warn(`Invalid date format: ${item.transactionDate}`);
        return acc; // 跳過無效日期
      }

      const formattedDate = date.toISOString().split('T')[0]; // 格式化為 'YYYY-MM-DD'
      if (!acc[formattedDate]) acc[formattedDate] = 0;
      acc[formattedDate] += item.amount;
      return acc;
    }, {} as { [key: string]: number });

    return Object.keys(groupedByDate)
      .sort() // 按日期排序
      .map(date => ({
        name: date,
        value: groupedByDate[date]
      }));
  }

}
