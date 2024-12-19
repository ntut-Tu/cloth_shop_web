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

        // 初始化柱状图数据
        this.barChartData = this.calculateBarChartData(this.ledgerData);

        // 初始化时序图数据
        this.lineChartData = this.calculateLineChartData(this.ledgerData);
      } else {
        alert(`ERROR: ${response.message}`);
      }
    });
  }

  // 计算柱状图数据
  calculateBarChartData(data: VendorLedger[]): any[] {
    const income = data.filter(d => d.amount > 0).reduce((sum, item) => sum + item.amount, 0);
    const expense = data.filter(d => d.amount < 0).reduce((sum, item) => sum + item.amount, 0);
    return [
      { name: '收入', value: income },
      { name: '支出', value: expense }
    ];
  }

  // 计算时序图数据
  calculateLineChartData(data: VendorLedger[]): any[] {
    const groupedByDate = data.reduce((acc, item) => {
      const date = new Date(item.transactionDate).toLocaleDateString();
      if (!acc[date]) acc[date] = 0;
      acc[date] += item.amount;
      return acc;
    }, {} as { [key: string]: number });

    return Object.keys(groupedByDate).map(date => ({
      name: date,
      value: groupedByDate[date]
    }));
  }
}
