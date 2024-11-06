// import { Component } from '@angular/core';
// import {Order} from "../../../model/order.model";
// import {OrderService} from "../../../service/order.service";
//
// @Component({
//   selector: 'app-admin.transaction.records',
//   templateUrl: './transaction-records.component.html',
//   styleUrl: './transaction-records.component.css'
// })
// export class TransactionRecordsComponent {
//   orders: Order[] = [];
//   toggledOrderIndex: number | null = null;
//
//   constructor(private orderService: OrderService) {}
//
//   ngOnInit(): void {
//     this.orderService.getOrders().subscribe((orders) => {
//       this.orders = orders;
//     });
//   }
//
//   toggleDetails(index: number): void {
//     this.toggledOrderIndex = this.toggledOrderIndex === index ? null : index;
//   }
// }
