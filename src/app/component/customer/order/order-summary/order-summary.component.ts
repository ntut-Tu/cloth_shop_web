import {Component, Input} from '@angular/core';
import {OrderService} from "../../../../service/order.service";
import {OrderSummary} from "../../../../model/OrderSummary";
import {StoreOrderSummary} from "../../../../model/StoreOrderSummary";

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent {

  @Input() order!: OrderSummary;
  @Input() jwtToken!: string;
  storeOrders: StoreOrderSummary[] = [];
  isExpanded: boolean = false;

  constructor(private orderService: OrderService) { }

  toggleExpand(): void {
    if (this.isExpanded) {
      this.isExpanded = false;
      this.storeOrders = [];
    } else {
      this.orderService.getStoreOrdersByOrderId(this.jwtToken, this.order.orderId).subscribe(response => {
        if (response.status) {
          this.storeOrders = response.data;
          this.isExpanded = true;
        } else {
          console.error(response.message);
        }
      });
    }
  }
}
