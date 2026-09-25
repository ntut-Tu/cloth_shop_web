import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {OrderSummaryModel} from "../../model/order/order-summary.model";
import {ApiResponseDTO} from "../../model/api-response.model";
import { StoreOrderSummaryModel } from '../../model/order/store-order-summary.model';
import {OrderItemDetailDTO} from "../../model/order/order-item-detail.model";

@Injectable({
  providedIn: 'root'
})
export class MockOrderService {
  getUserOrderSummaries(): Observable<OrderSummaryModel[]> {
    const mockData: OrderSummaryModel[] = [
      {
        orderId: 1,
        orderDate: '2024-12-08',
        totalAmount: 300,
        shippingDiscountCode: '123',
        payStatus: 'Paid',
        shipStatus: 'Delivered',
        orderSummaryDetail: {
          creditCardLastFour: '1234',
          paymentMethod: 'Credit Card',
          shippingAddress: '123 Main St',
          shippingMethod: 'Standard'
        }
      },
      {
        orderId: 2,
        orderDate: '2024-12-09',
        totalAmount: 150,
        shippingDiscountCode: 'SHIPFREE',
        payStatus: 'Paid',
        shipStatus: 'Completed',
        orderSummaryDetail: {
          creditCardLastFour: '5678',
          paymentMethod: 'PayPal',
          shippingAddress: '456 Elm St',
          shippingMethod: 'Express'
        }
      }
    ];
    return of(mockData);
  }

  getStoreOrdersByOrderId(orderId: number): Observable<StoreOrderSummaryModel[]> {
    const mockData: StoreOrderSummaryModel[] = [
      {
        storeOrderId: 1,
        storeName: 'Store A',
        imageUrl: 'assets/storeA-logo.png',
        vendorCouponCode: 'VCOUPON20'
      },
      {
        storeOrderId: 2,
        storeName: 'Store B',
        imageUrl: 'assets/storeB-logo.png',
        vendorCouponCode: 'VCOUPON30'
      }
    ];
    return of(mockData );
  }

  getOrderItemsByStoreOrderId(storeOrderId: number): Observable<OrderItemDetailDTO[]>{
    const mockData: OrderItemDetailDTO[] = [
      {
        orderItemId: 1,
        unit_price: 100,
        quantity: 2,
        total_price: 200,
        order_image_url: 'assets/product1.png',
        product_name: 'Product 1',
        size: 'M',
        color: 'Red'
      },
      {
        orderItemId: 2,
        unit_price: 50,
        quantity: 1,
        total_price: 50,
        order_image_url: 'assets/product2.png',
        product_name: 'Product 2',
        size: 'L',
        color: 'Blue'
      }
    ];
    return of(mockData );
  }
}
