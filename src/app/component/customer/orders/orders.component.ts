import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../service/order.service';
import { Order } from '../../../model/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  toggledOrderIndex: number | null = null;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }

  toggleDetails(index: number): void {
    this.toggledOrderIndex = this.toggledOrderIndex === index ? null : index;
  }
}
