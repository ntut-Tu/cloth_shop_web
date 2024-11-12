import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Order} from "../../model/outdated/order.model";

@Injectable({
  providedIn: 'root'
})
export class SalesReportService {
  getSales(): Observable<Order[]> {
    const mockOrders: Order[] = [
      {
        id: 1,
        status: 'Shipped',
        totalAmount: 200,
        orderDate: '2024-09-30',
        seller: 'Vendor 1',
        details: [
          { productId: 101, productName: 'T-shirt', quantity: 2, price: 50 },
          { productId: 102, productName: 'Jeans', quantity: 1, price: 100 }
        ]
      },
      {
        id: 2,
        status: 'Delivered',
        totalAmount: 150,
        orderDate: '2024-09-28',
        seller: 'Vendor 2',
        details: [
          { productId: 103, productName: 'Hat', quantity: 3, price: 50 }
        ]
      }
    ];

    return of(mockOrders);
  }
}
