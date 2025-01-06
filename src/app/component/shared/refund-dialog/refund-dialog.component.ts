import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RefundService } from '../../../service/business/refund.service';
import {
  mapFormToRefundModel,
  mapRefundModelToForm,
  RefundModel,
  RefundScopeDataModel
} from '../../../model/refund/refund.model';
import {RefundStatus} from "../../../model/refund/refund-status.model";

@Component({
  selector: 'app-refund-dialog',
  templateUrl: './refund-dialog.component.html',
  styleUrls: ['./refund-dialog.component.css'],
})
export class RefundDialogComponent implements OnInit {
  refundForm!: FormGroup;
  refundStatuses: RefundStatus[] = [];
  isRequestExisting = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RefundDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RefundScopeDataModel,
    private refundService: RefundService
  ) {}

  ngOnInit(): void {
    this.refundForm = this.fb.group({
      refundId: [{ value: null, disabled: true }],
      orderItemId: [{ value: this.data.order_item_id, disabled: true }],
      requestTarget: [{ value: null, disabled: true }],
      statusType: [{ value: null, disabled: true }],
      isClosed: [{ value: null, disabled: true }],
      refundReason: [{ value: null, disabled: true }],
      vendorResponse: [{ value: null, disabled: true }],
      adminResponse: [{ value: null, disabled: true }],
      vendorId: [{ value: null, disabled: true }],
      adminId: [{ value: null, disabled: true }],
    });

    // 檢查是否存在退款申請
    this.refundService.checkRefundRequestExist(this.data.order_item_id).subscribe((ret) => {
      this.isRequestExisting = ret.data;

      if (this.isRequestExisting) {
        // 如果申請已存在，載入數據
        this.loadExistingRequest();
      } else if (this.data.user_type === 'customer') {
        // 如果申請不存在且是顧客，允許創建申請
        this.enableNewRequestCreation();
      }
    });
  }

  loadExistingRequest(): void {
    this.refundService.getRefundByOrderId(this.data.order_item_id).subscribe((response) => {
      const refundData = response.data;
      this.refundForm.patchValue(mapRefundModelToForm(refundData));
      this.handleStatus(refundData.status_type as RefundStatus);
    });
  }

  enableNewRequestCreation(): void {
    this.refundForm.patchValue({
      requestTarget: 'vendor',
    });
    this.enableEditableFields(['refundReason']);
  }

  handleStatus(status: RefundStatus): void {
    switch (status) {
      case RefundStatus.VendorPending:
        if (this.data.user_type === 'vendor') {
          this.refundStatuses = [RefundStatus.VendorApprove, RefundStatus.VendorReject];
          this.enableEditableFields(['vendorResponse', 'statusType']);
        }
        break;
      case RefundStatus.AdminPending:
        if (this.data.user_type === 'admin') {
          this.refundStatuses = [RefundStatus.AdminApprove, RefundStatus.AdminReject];
          this.enableEditableFields(['adminResponse', 'statusType']);
        }
        break;
      case RefundStatus.VendorApprove:
        this.refundStatuses = Object.values(RefundStatus);
        break;
      case RefundStatus.AdminApprove:
        this.setClosedState(true);
        this.refundStatuses = Object.values(RefundStatus);
        break;
      case RefundStatus.VendorReject:
        if (this.data.user_type === 'customer') {
          this.refundStatuses = [RefundStatus.AdminPending];
          this.enableEditableFields(['refundReason', 'statusType']);
        }
        break;
      case RefundStatus.AdminReject:
        this.setClosedState(true);
        this.refundStatuses = Object.values(RefundStatus);
        break;
      default:
        this.refundStatuses = Object.values(RefundStatus);
        this.watchModeInit();
        break;
    }
  }

  setClosedState(isClosed: boolean): void {
    this.refundForm.patchValue({ isClosed });
    this.refundForm.disable();
  }

  enableEditableFields(fields: string[]): void {
    fields.forEach((field) => {
      this.refundForm.get(field)?.enable();
    });
  }

  watchModeInit(): void {
    this.refundService.getRefundByOrderId(this.data.order_item_id).subscribe((response) => {
      const refundData = response.data;
      this.refundForm.patchValue(refundData);
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.refundForm.valid) {
      const formValue = this.refundForm.getRawValue();
      const refundModel: RefundModel = mapFormToRefundModel(formValue);

      if (!this.isRequestExisting) {
        // 創建新申請
        this.refundService.createRefund(refundModel).subscribe(() => {
          this.dialogRef.close(refundModel);
        });
      } else {
        // 更新已有申請
        this.refundService.updateRefund(refundModel.refund_id, refundModel).subscribe(() => {
          this.dialogRef.close(refundModel);
        });
        this.dialogRef.close(refundModel);
      }
    }
  }
}
