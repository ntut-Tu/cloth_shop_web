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
  currentPage: number = 1; // 當前頁數
  pageSize: number = 10; // 每頁顯示數量
  isLastPage: boolean = false; // 是否為尾頁


  constructor(private orderService: OrderService, private dialog:MatDialog) {}

  ngOnInit(): void {
    this.loadOrderSummaries();
  }

  loadOrderSummaries(): void {
    this.orderService.getUserOrderSummaries(this.currentPage, this.pageSize).subscribe(response => {
      if (response.data.length < this.pageSize) {
        this.isLastPage = true; // 當回傳資料少於 pageSize 時，設定為尾頁
      } else {
        this.isLastPage = false;
      }

      if (this.currentPage === 1) {
        this.orderSum = response.data; // 第一頁時直接覆蓋
      } else {
        this.orderSum = [...this.orderSum, ...response.data]; // 加載更多
      }
    });
  }

  loadMore(): void {
    if (!this.isLastPage) {
      this.currentPage++;
      this.loadOrderSummaries();
    }
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
    this.ngOnInit();
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
