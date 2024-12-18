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
  currentPage: number = 1; // 當前頁數
  pageSize: number = 10; // 每頁顯示數量
  isLastPage: boolean = false; // 是否為尾頁


  storeOrderHeaders = ['storeOrderId', 'orderDate', 'totalNet','totalDiscount','totalPrice','shippingDiscountCode','shipStatus','payStatus','blank']
  orderHeaders = ['productId','productName']
  productVarHeaders = ['productVariantId','color','size','quantity']

  constructor(private vendorOrderService: VendorOrderService) {}

  ngOnInit(): void {
    this.loadStoreOrders();
  }


  loadStoreOrders(): void {
    this.vendorOrderService.getVendorStoreOrders(this.currentPage, this.pageSize).subscribe(response  => {
      if (response.data.length < this.pageSize) {
        this.isLastPage = true; // 當回傳資料少於 pageSize 時，設定為尾頁
      } else {
        this.isLastPage = false;
      }

      if (this.currentPage === 1) {
        this.storeOrders = response.data; // 第一頁時直接覆蓋
      } else {
        this.storeOrders = [...this.storeOrders, ...response.data]; // 加載更多
      }
    });
  }

  loadMore(): void {
    if (!this.isLastPage) {
      this.currentPage++;
      this.loadStoreOrders();
    }
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
