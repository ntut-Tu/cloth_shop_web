import { Component, OnInit } from '@angular/core';
import { OrderSummaryModel } from '../../../model/order/order-summary.model';
import { StoreOrderSummaryModel } from '../../../model/order/store-order-summary.model';
import { OrderItemDetailDTO } from '../../../model/order/order-item-detail.model';
import { OrderService } from '../../../service/business/order.service';
import {ReviewComponent} from "../../guest/review/review.component";
import {MatDialog} from "@angular/material/dialog";
import {CustomerReviewComponent} from "../customer-review/customer-review.component";

@Component({
  selector: 'app-new-style-order',
  templateUrl: './new-style-order.component.html',
  styleUrls: ['./new-style-order.component.css']
})
export class NewStyleOrderComponent implements OnInit {
  orderSum: OrderSummaryModel[] = [];
  storeOrders: { [orderId: number]: StoreOrderSummaryModel[] } = {};
  orderItems: { [storeOrderId: number]: OrderItemDetailDTO[] } = {};

  constructor(private orderService: OrderService,private dialog:MatDialog) {}

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
    this.orderService.updateOrderStatus(orderId, 'Completed');
    // 實際業務邏輯
  }

  applyRefund(item: any): void {
    console.log('申請退款', item);
    this.orderService.updateOrderStatus(item.orderId, 'Refund_Requested');
    // 實際業務邏輯
  }

  applyReview(item:OrderItemDetailDTO) {
    const dialogRef = this.dialog.open(CustomerReviewComponent, {
      width: '600px',
      data: { productId: item.orderItemId } // 將產品數據傳遞到彈窗
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
      }});
  }
}
