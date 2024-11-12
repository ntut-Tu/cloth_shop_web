import {Component, Input} from '@angular/core';
import {OrderItemDetailDTO} from "../../../../model/order-item-detail.model";

@Component({
  selector: 'app-order-item-detail',
  templateUrl: './order-item-detail.component.html',
  styleUrl: './order-item-detail.component.css'
})
export class OrderItemDetailComponent {

  @Input() item!: OrderItemDetailDTO;

}
