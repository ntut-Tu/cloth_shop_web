import { Component, OnInit } from '@angular/core';
import { OrderSummaryModel } from '../../../model/order/order-summary.model';
import { StoreOrderSummaryModel } from '../../../model/order/store-order-summary.model';
import { OrderItemDetailDTO } from '../../../model/order/order-item-detail.model';
import { OrderService } from '../../../service/business/order.service';

@Component({
  selector: 'app-new-style-order',
  templateUrl: './new-style-order.component.html',
  styleUrls: ['./new-style-order.component.css']
})
export class NewStyleOrderComponent implements OnInit {
  orderSum: OrderSummaryModel[] = [];
  storeOrders: { [orderId: number]: StoreOrderSummaryModel[] } = {};
  orderItems: { [storeOrderId: number]: OrderItemDetailDTO[] } = {};

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrderSummaries();
  }

  loadOrderSummaries(): void {
    this.orderService.getUserOrderSummaries().subscribe(response => {
      this.orderSum = response.data;
    });
  }

  loadStoreOrders(orderId: number): void {
    if (!this.storeOrders[orderId]) {
      this.orderService.getStoreOrdersByOrderId(orderId).subscribe(response => {
        this.storeOrders[orderId] = response.data;
      });
    }
  }

  loadOrderItems(storeOrderId: number): void {
    if (!this.orderItems[storeOrderId]) {
      this.orderService.getOrderItemsByStoreOrderId(storeOrderId).subscribe(response => {
        this.orderItems[storeOrderId] = response.data;
      });
    }
  }

  confirmTransaction(orderId: number): void {
    console.log(`訂單 ${orderId} 已完成交易`);
    // 實際業務邏輯
  }

  applyRefund(item: any): void {
    console.log('申請退款', item);
    // 實際業務邏輯
  }
}
