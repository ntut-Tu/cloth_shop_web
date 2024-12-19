import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderApiService } from '../api/order-api.service';
import { ApiResponseDTO } from '../../model/api-response.model';
import { OrderSummaryModel } from '../../model/order/order-summary.model';
import { StoreOrderSummaryModel } from '../../model/order/store-order-summary.model';
import { OrderItemDetailDTO } from '../../model/order/order-item-detail.model';
import {VendorOrderModel} from "../../model/order/vendor-order.model";

@Injectable({
  providedIn: 'root'
})
export class VendorOrderService {

  constructor(private orderApiService: OrderApiService) {}

  updateStoreOrderStatus(storeOrderId: number, status: string): any{
    this.orderApiService.updateStoreOrderStatus(storeOrderId, status).subscribe(response => {
      if (response.status) {
        console.log('Store order status updated successfully');
        return true;
      } else {
        console.error('Failed to update store order status');
        return response.message;
      }
    });
    return 'Failed to call API';
  }

  getVendorStoreOrders(page: number = 1, size: number = 10): Observable<ApiResponseDTO<VendorOrderModel[]>> {
    return this.orderApiService.getVendorStoreOrders(page, size);
  }
}
