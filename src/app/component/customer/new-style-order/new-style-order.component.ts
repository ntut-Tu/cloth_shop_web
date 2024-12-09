import { Component } from '@angular/core';
import {BehaviorSubject, delay, Observable, of} from "rxjs";

@Component({
  selector: 'app-new-style-order',
  templateUrl: './new-style-order.component.html',
  styleUrl: './new-style-order.component.css'
})
export class NewStyleOrderComponent {
  // 訂單摘要數據
  orderSum = [
    { orderId: 'O12345', orderDate: '2024-12-09', totalAmount: 500, shippingDiscountCode: 'FREE2024',shipStatus: 'Pending',payStatus: 'Paid'},
    { orderId: 'O67890', orderDate: '2024-12-08', totalAmount: 300, shippingDiscountCode: null, shipStatus: 'Delivered' ,payStatus: 'Paid'},
  ];

  // 店家訂單數據（按 orderId 分組）
  storeOrders: { [orderId: string]: any[] } = {};

  // 商品資料數據（按 storeOrderId 分組）
  orderItems: { [storeOrderId: string]: any[] } = {};

  // 模擬按需加載店家訂單
  loadStoreOrders(orderId: string) {
    if (!this.storeOrders[orderId]) {
      // 模擬 API 請求
      this.storeOrders[orderId] = [
        {
          storeOrderId: 'S123',
          storeName: '商店 A',
          imageUrl: 'assets/storeA-logo.png',
          vendorCouponCode: 'VCOUPON20',
        },
        {
          storeOrderId: 'S124',
          storeName: '商店 B',
          imageUrl: 'assets/storeB-logo.png',
          vendorCouponCode: null,
        },
      ];
      console.log(`Loaded store orders for orderId: ${orderId}`);
    }
  }

  // 模擬按需加載商品資料
  loadOrderItems(storeOrderId: string) {
    if (!this.orderItems[storeOrderId]) {
      // 模擬 API 請求
      this.orderItems[storeOrderId] = [
        {
          name: '商品 1',
          price: 200,
          quantity: 2,
          totalPrice: 400,
          size: 'L',
          color: '紅色',
          imageUrl: 'assets/product1.png',
        },
        {
          name: '商品 2',
          price: 100,
          quantity: 1,
          totalPrice: 100,
          size: 'M',
          color: '藍色',
          imageUrl: 'assets/product2.png',
        },
      ];
      console.log(`Loaded order items for storeOrderId: ${storeOrderId}`);
    }
  }

  // 確認交易完成
  confirmTransaction(orderId: string) {
    console.log(`訂單 ${orderId} 已完成交易`);
    // 實際業務邏輯
  }

  // 申請退款
  applyRefund(item: any) {
    console.log('申請退款', item);
    // 實際業務邏輯
  }
}
