import { Component, OnInit } from '@angular/core';
import {OrderSummary} from "../../../../model/OrderSummary";
import {OrderService} from "../../../../service/order.service";
import {AuthService} from "../../../../service/auth.service";


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: OrderSummary[] = [];
  jwtToken: string | null = null;

  constructor(private orderService: OrderService, private authService: AuthService) { }

  ngOnInit(): void {
    this.jwtToken = this.authService.getToken();
    if (this.jwtToken) {
      this.loadUserOrderSummaries();
    } else {
      console.error('User is not authenticated');
    }
  }

  loadUserOrderSummaries(): void {
    if (!this.jwtToken) return;

    this.orderService.getUserOrderSummaries(this.jwtToken).subscribe(response => {
      if (response.status) {
        this.orders = response.data;
      } else {
        console.error(response.message);
      }
    });
  }
}
