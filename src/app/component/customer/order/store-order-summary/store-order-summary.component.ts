import {Component, Input} from '@angular/core';
import {OrderService} from "../../../../service/order.service";
import {StoreOrderSummary} from "../../../../model/StoreOrderSummary";
import {OrderItemDetail} from "../../../../model/OrderItemDetail";

@Component({
  selector: 'app-store-order-summary',
  templateUrl: './store-order-summary.component.html',
  styleUrl: './store-order-summary.component.css'
})
export class StoreOrderSummaryComponent {

  @Input() storeOrder!: StoreOrderSummary;
  @Input() jwtToken!: string;
  orderItems: OrderItemDetail[] = [];
  isExpanded: boolean = false;

  constructor(private orderService: OrderService) { }

  toggleExpand(): void {
    if (this.isExpanded) {
      this.isExpanded = false;
      this.orderItems = [];
    } else {
      this.orderService.getOrderItemsByStoreOrderId(this.jwtToken, this.storeOrder.storeOrderId).subscribe(response => {
        if (response.status) {
          this.orderItems = response.data;
          this.isExpanded = true;
        } else {
          console.error(response.message);
        }
      });
    }
  }
}
