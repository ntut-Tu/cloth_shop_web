import { Component, OnInit } from '@angular/core';
import {OrderSummaryModel} from "../../../../model/order-summary.model";
import {OrderService} from "../../../../service/business/order.service";
import {AuthService} from "../../../../service/business/auth.service";


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: OrderSummaryModel[] = [];

  constructor(private orderService: OrderService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  loadUserOrderSummaries(): void {

    this.orderService.getUserOrderSummaries().subscribe(response => {
      if (response.status) {
        this.orders = response.data;
      } else {
        console.error(response.message);
      }
    });
  }
}
