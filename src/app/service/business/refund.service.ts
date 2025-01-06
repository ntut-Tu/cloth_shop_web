import {Injectable} from "@angular/core";
import {RefundApiService} from "../api/refund-api.service";
import {RefundModel} from "../../model/refund/refund.model";

@Injectable({
  providedIn: 'root'
})

export class RefundService {
  constructor(private refundApiService: RefundApiService) {
  }

  createRefund(refundData:RefundModel) {
    return this.refundApiService.createRefund(refundData);
  }

  getRefundByOrderId(orderItemId: number) {
    return this.refundApiService.getRefundByOrderId(orderItemId);
  }

  updateRefund(refundId:number, refundData:RefundModel) {
    return this.refundApiService.updateRefund(refundId, refundData);
  }

  checkRefundRequestExist(orderItemId:number) {
    return this.refundApiService.checkRefundRequestExist(orderItemId);
  }

  getRefundList() {
    return this.refundApiService.getRefundList();
  }

  getRefundById(refundId:number) {
    return this.refundApiService.getRefundById(refundId);
  }
}
