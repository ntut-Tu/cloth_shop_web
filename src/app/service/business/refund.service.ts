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

  getRefund(refundId: number) {
    return this.refundApiService.getRefund(refundId);
  }

  updateRefund(refundId:number, refundData:RefundModel) {
    return this.refundApiService.updateRefund(refundId, refundData);
  }
}
