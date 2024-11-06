import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponse} from "../model/ApiResponse";
import {OrderSummary} from "../model/OrderSummary";
import {StoreOrderSummary} from "../model/StoreOrderSummary";
import {OrderItemDetail} from "../model/OrderItemDetail";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = '/api/orders';

  constructor(private http: HttpClient) { }

  // 設置 Authorization 標頭
  private getAuthHeaders(jwtToken: string): HttpHeaders {
    return new HttpHeaders({ 'Authorization': `Bearer ${jwtToken}` });
  }

  // 取得使用者的訂單簡介列表
  getUserOrderSummaries(jwtToken: string, page: number = 1, size: number = 10): Observable<ApiResponse<OrderSummary[]>> {
    return this.http.get<ApiResponse<OrderSummary[]>>(`${this.apiUrl}/user`, {
      headers: this.getAuthHeaders(jwtToken),
      params: {
        page: page.toString(),
        size: size.toString()
      }
    });
  }

  // 取得特定訂單的商家訂單列表
  getStoreOrdersByOrderId(jwtToken: string, orderId: number): Observable<ApiResponse<StoreOrderSummary[]>> {
    return this.http.get<ApiResponse<StoreOrderSummary[]>>(`${this.apiUrl}/${orderId}/stores`, {
      headers: this.getAuthHeaders(jwtToken)
    });
  }

  // 取得商家訂單的商品詳情
  getOrderItemsByStoreOrderId(jwtToken: string, storeOrderId: number): Observable<ApiResponse<OrderItemDetail[]>> {
    return this.http.get<ApiResponse<OrderItemDetail[]>>(`${this.apiUrl}/stores/${storeOrderId}/items`, {
      headers: this.getAuthHeaders(jwtToken)
    });
  }
}
