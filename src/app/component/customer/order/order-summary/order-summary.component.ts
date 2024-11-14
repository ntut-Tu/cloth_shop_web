import {Component, Input} from '@angular/core';
import {OrderService} from "../../../../service/business/order.service";
import {OrderSummaryModel} from "../../../../model/order-summary.model";
import {StoreOrderSummaryModel} from "../../../../model/store-order-summary.model";

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent {

  @Input() order!: OrderSummaryModel;
  storeOrders: StoreOrderSummaryModel[] = [];
  isExpanded: boolean = false;

  constructor(private orderService: OrderService) { }

  toggleExpand(): void {
    if (this.isExpanded) {
      this.isExpanded = false;
      this.storeOrders = [];
    } else {
      this.orderService.getStoreOrdersByOrderId(this.order.orderId).subscribe(response => {
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
