import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderApiService } from '../api/order-api.service';
import { ApiResponseDTO } from '../../model/api-response.model';
import { OrderSummaryModel } from '../../model/order/order-summary.model';
import { StoreOrderSummaryModel } from '../../model/order/store-order-summary.model';
import { OrderItemDetailDTO } from '../../model/order/order-item-detail.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private orderApiService: OrderApiService) {}

  /**
   * 獲取當前使用者的訂單摘要列表
   * @param page - 分頁的頁碼（預設為 1）
   * @param size - 每頁的資料數量（預設為 10）
   * @returns Observable，包含 ApiResponseDTO 與訂單摘要的列表
   */
  getUserOrderSummaries(page: number = 1, size: number = 10): Observable<ApiResponseDTO<OrderSummaryModel[]>> {
    return this.orderApiService.getUserOrderSummaries(page, size);
  }

  /**
   * 根據訂單 ID 獲取該訂單的商家訂單列表
   * @param orderId - 訂單的唯一標識符
   * @returns Observable，包含 ApiResponseDTO 與商家訂單摘要的列表
   */
  getStoreOrdersByOrderId(orderId: number): Observable<ApiResponseDTO<StoreOrderSummaryModel[]>> {
    return this.orderApiService.getStoreOrdersByOrderId(orderId);
  }

  /**
   * 根據商家訂單 ID 獲取商品詳情列表
   * @param storeOrderId - 商家訂單的唯一標識符
   * @returns Observable，包含 ApiResponseDTO 與商品詳情的列表
   */
  getOrderItemsByStoreOrderId(storeOrderId: number): Observable<ApiResponseDTO<OrderItemDetailDTO[]>> {
    return this.orderApiService.getOrderItemsByStoreOrderId(storeOrderId);
  }
}
