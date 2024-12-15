import { Component, OnInit } from '@angular/core';
import { OrderSummaryModel } from '../../../model/order/order-summary.model';
import { StoreOrderSummaryModel } from '../../../model/order/store-order-summary.model';
import { OrderItemDetailDTO } from '../../../model/order/order-item-detail.model';
import { OrderService } from '../../../service/business/order.service';
import {VendorOrderService} from "../../../service/business/vendor-order.service";
import {VendorOrderModel} from "../../../model/order/vendor-order.model";

@Component({
  selector: 'app-new-style-order',
  templateUrl: './new-style-vendor-order.component.html',
  styleUrls: ['./new-style-vendor-order.component.css']
})
export class NewStyleVendorOrderComponent implements OnInit {
  storeOrders: VendorOrderModel[] = [];

  storeOrderHeaders = ['storeOrderId', 'orderDate', 'totalNet','totalDiscount','totalPrice','shippingDiscountCode','shipStatus','payStatus','blank']
  orderHeaders = ['productId','productName']
  productVarHeaders = ['productVariantId','color','size','quantity']

  constructor(private vendorOrderService: VendorOrderService) {}

  ngOnInit(): void {
    this.loadStoreOrders();
  }


  loadStoreOrders(): void {
    this.vendorOrderService.getVendorStoreOrders().subscribe(response  => {
      this.storeOrders = response.data;
    });
  }
  updateStoreOrderStatus(storeOrderId:number,status:string="Shipped"):void{
    const updateResult =  this.vendorOrderService.updateStoreOrderStatus(storeOrderId,status);
    if(updateResult){
      alert("update success")
      this.ngOnInit();
    }else {
      alert(updateResult)
    }
  }
}
