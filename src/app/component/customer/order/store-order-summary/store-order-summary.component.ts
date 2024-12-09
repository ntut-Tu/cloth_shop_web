import {Component, Input} from '@angular/core';
import {OrderService} from "../../../../service/business/order.service";
import {StoreOrderSummaryModel} from "../../../../model/store-order-summary.model";
import {OrderItemDetailDTO} from "../../../../model/order-item-detail.model";

@Component({
  selector: 'app-store-order-summary',
  templateUrl: './store-order-summary.component.html',
  styleUrl: './store-order-summary.component.css'
})
export class StoreOrderSummaryComponent {

  @Input() storeOrder!: StoreOrderSummaryModel;
  orderItems: OrderItemDetailDTO[] = [];
  isExpanded: boolean = false;

  constructor(private orderService: OrderService) { }

  toggleExpand(): void {
    this.orderService.getOrderItemsByStoreOrderId(this.storeOrder.storeOrderId).subscribe(response => {
      if (response.status) {
        this.orderItems = response.data;
        this.isExpanded = true;
      } else {
        console.error(response.message);
      }
    });
}
}
