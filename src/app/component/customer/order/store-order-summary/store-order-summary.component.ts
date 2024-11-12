import {Component, Input} from '@angular/core';
import {OrderService} from "../../../../service/order.service";
import {StoreOrderSummaryModel} from "../../../../model/store-order-summary.model";
import {OrderItemDetailDTO} from "../../../../model/order-item-detail.model";

@Component({
  selector: 'app-store-order-summary',
  templateUrl: './store-order-summary.component.html',
  styleUrl: './store-order-summary.component.css'
})
export class StoreOrderSummaryComponent {

  @Input() storeOrder!: StoreOrderSummaryModel;
  @Input() jwtToken!: string;
  orderItems: OrderItemDetailDTO[] = [];
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
