import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {RefundListSumResponse, RefundModel} from "../../model/refund/refund.model";
import {Observable} from "rxjs";
import {ApiResponseDTO} from "../../model/api-response.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class RefundApiService {
  constructor(private http: HttpClient) {
  }
  private apiUrl =  environment.baseUrl + "/api/refunds";

  createRefund(refundData:RefundModel) :Observable<ApiResponseDTO<number>>{
    return this.http.post<ApiResponseDTO<number>>(`${this.apiUrl}/create`,refundData);
  }

  getRefundByOrderId(orderItemId:number) :Observable<ApiResponseDTO<RefundModel>>{
    return this.http.get<ApiResponseDTO<RefundModel>>(`${this.apiUrl}/request/byItem/${orderItemId}`);
  }

  getRefundById(refundId:number) :Observable<ApiResponseDTO<RefundModel>>{
    return this.http.get<ApiResponseDTO<RefundModel>>(`${this.apiUrl}/request/byId/${refundId}`);
  }

  updateRefund(refundId:number,refundData:RefundModel) :Observable<ApiResponseDTO<number>>{
    return this.http.put<ApiResponseDTO<number>>(`${this.apiUrl}/update/${refundId}`,refundData);
  }

  checkRefundRequestExist(orderItemId: number) {
    return this.http.get<ApiResponseDTO<boolean>>(`${this.apiUrl}/checkRequestExist/${orderItemId}`);
  }

  getRefundList(): Observable<ApiResponseDTO<RefundListSumResponse[]>> {
    return this.http.get<ApiResponseDTO<RefundListSumResponse[]>>(`${this.apiUrl}/list`);
  }
}
