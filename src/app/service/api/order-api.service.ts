import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponseDTO } from '../../model/api-response.model';
import { OrderSummaryModel } from '../../model/order/order-summary.model';
import { StoreOrderSummaryModel } from '../../model/order/store-order-summary.model';
import { OrderItemDetailDTO } from '../../model/order/order-item-detail.model';

@Injectable({
  providedIn: 'root'
})
export class OrderApiService {

  private apiUrl = '/api/orders';

  constructor(private http: HttpClient) { }

  /**
   * 獲取當前使用者的訂單摘要列表
   * @param page - 分頁的頁碼
   * @param size - 每頁的資料數量
   * @returns Observable，包含 ApiResponseDTO 與訂單摘要的列表
   */
  getUserOrderSummaries(page: number, size: number): Observable<ApiResponseDTO<OrderSummaryModel[]>> {
    return this.http.get<ApiResponseDTO<OrderSummaryModel[]>>(`${this.apiUrl}/user`, {
      params: {
        page: page.toString(),
        size: size.toString()
      }
    });
  }

  /**
   * 根據訂單 ID 獲取該訂單的商家訂單列表
   * @param orderId - 訂單的唯一標識符
   * @returns Observable，包含 ApiResponseDTO 與商家訂單摘要的列表
   */
  getStoreOrdersByOrderId(orderId: number): Observable<ApiResponseDTO<StoreOrderSummaryModel[]>> {
    return this.http.get<ApiResponseDTO<StoreOrderSummaryModel[]>>(`${this.apiUrl}/${orderId}`);
  }

  /**
   * 根據商家訂單 ID 獲取商品詳情列表
   * @param storeOrderId - 商家訂單的唯一標識符
   * @returns Observable，包含 ApiResponseDTO 與商品詳情的列表
   */
  getOrderItemsByStoreOrderId(storeOrderId: number): Observable<ApiResponseDTO<OrderItemDetailDTO[]>> {
    return this.http.get<ApiResponseDTO<OrderItemDetailDTO[]>>(`${this.apiUrl}/${storeOrderId}/items`);
  }

  /**
   * 更新訂單狀態
   * @param orderId - 訂單的唯一標識符
   * @param status - 新的訂單狀態
   * @returns Observable，包含 ApiResponseDTO 與更新結果
   */
  updateOrderStatus(orderId: number, status: string): Observable<ApiResponseDTO<string>> {
    return this.http.post<ApiResponseDTO<string>>(`${this.apiUrl}/${orderId}/status`, status);
  }
}
