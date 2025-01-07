import {Component, OnInit} from '@angular/core';
import {PlatformLedger} from "../../../model/ledger/platform-ledger.model";
import {LedgerService} from "../../../service/business/ledger-service";

@Component({
  selector: 'app-admin-ledger',
  templateUrl: './admin-ledger.component.html',
  styleUrl: './admin-ledger.component.css'
})
export class AdminLedgerComponent  implements OnInit {
  ledgerData: PlatformLedger[] = [];
  displayedColumns: string[] = ['ledgerEntryId', 'ledgerType', 'transactionType', 'amount', 'transactionDate','totalAmount'];

  barChartData: any[] = [];
  lineChartData: any[] = [];
  view: [number, number] = [700, 400];




  constructor(private ledgerService: LedgerService) {}

  ngOnInit() {
    this.ledgerService.getPlatformLedger().subscribe(response => {
      if (response.status) {
        this.ledgerData = response.data;

        this.barChartData = this.calculateBarChartData(this.ledgerData);

        this.lineChartData = this.calculateLineChartData(this.ledgerData);
      } else {
        alert(`ERROR: ${response.message}`);
      }
    });
  }

  calculateBarChartData(data: PlatformLedger[]): any[] {
    const income = data.filter(d => d.amount > 0).reduce((sum, item) => sum + item.amount, 0);
    const expense = data.filter(d => d.amount < 0).reduce((sum, item) => sum + item.amount, 0);
    return [
      { name: '收入', value: income },
      { name: '支出', value: expense }
    ];
  }

  calculateLineChartData(data: PlatformLedger[]): any[] {
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
