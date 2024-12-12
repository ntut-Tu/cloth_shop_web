import { Component, OnInit } from '@angular/core';
import { OrderSummaryModel } from '../../../model/order/order-summary.model';
import { StoreOrderSummaryModel } from '../../../model/order/store-order-summary.model';
import { OrderItemDetailDTO } from '../../../model/order/order-item-detail.model';
import { OrderService } from '../../../service/business/order.service';
import {MockOrderService} from "../../../service/business/mock-order.service";
import {
  NewStyleProductDetailComponent
} from "../../customer/new-style-product-detail/new-style-product-detail.component";
import {MatDialog} from "@angular/material/dialog";
import {ReviewComponent} from "../review/review.component";

@Component({
  selector: 'app-new-style-order',
  templateUrl: './mock-new-style-order.component.html',
  styleUrls: ['./mock-new-style-order.component.css']
})
export class MockNewStyleOrderComponent implements OnInit {
  orderSum: OrderSummaryModel[] = [];
  storeOrders: { [orderId: number]: StoreOrderSummaryModel[] } = {};
  orderItems: { [storeOrderId: number]: OrderItemDetailDTO[] } = {};

  constructor(private orderService: MockOrderService,private dialog:MatDialog) {}

  ngOnInit(): void {
    this.loadOrderSummaries();
  }

  loadOrderSummaries(): void {
    this.orderService.getUserOrderSummaries().subscribe(response => {
      this.orderSum = response;
    });
  }

  loadStoreOrders(orderId: number): void {
    if (!this.storeOrders[orderId]) {
      this.orderService.getStoreOrdersByOrderId(orderId).subscribe(response => {
        this.storeOrders[orderId] = response;
      });
    }
  }

  loadOrderItems(storeOrderId: number): void {
    if (!this.orderItems[storeOrderId]) {
      this.orderService.getOrderItemsByStoreOrderId(storeOrderId).subscribe(response => {
        this.orderItems[storeOrderId] = response;
      });
    }
  }

  confirmTransaction(orderId: number): void {
    console.log(`訂單 ${orderId} 已完成交易`);
    // this.orderService.updateOrderStatus(orderId, 'COMPLETED');
    // 實際業務邏輯
  }

  applyRefund(item: any): void {
    console.log('申請退款', item);
    // this.orderService.updateOrderStatus(item.orderId, 'REFUND_REQUESTED');
    // 實際業務邏輯
  }

  applyReview(item:OrderItemDetailDTO) {
    const dialogRef = this.dialog.open(ReviewComponent, {
          width: '600px',
          data: { productId: item.orderItemId } // 將產品數據傳遞到彈窗
        });
    dialogRef.afterClosed().subscribe(result => {
          if (result === 'success') {
          }});
  }
}
