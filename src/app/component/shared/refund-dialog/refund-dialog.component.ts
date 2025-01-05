import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RefundService } from '../../../service/business/refund.service';
import {mapFormToRefundModel, RefundModel, RefundScopeDataModel} from '../../../model/refund/refund.model';
import {RefundStatus} from "../../../model/refund/refund-status.model";

@Component({
  selector: 'app-refund-dialog',
  templateUrl: './refund-dialog.component.html',
  styleUrls: ['./refund-dialog.component.css'],
})
export class RefundDialogComponent implements OnInit {
  refundForm!: FormGroup;
  refundStatuses = Object.values(RefundStatus);
  isRequestExisting = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RefundDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RefundScopeDataModel,
    private refundService: RefundService
  ) {}

  ngOnInit(): void {
    this.refundForm = this.fb.group({
      orderItemId: [{ value: '', disabled: true }],
      requestTarget: [{ value: '', disabled: true }],
      statusType: [{ value: '', disabled: true }],
      isClosed: [{ value: '', disabled: true }],
      refundReason: [{ value: '', disabled: true }],
      vendorResponse: [{ value: '', disabled: true }],
      adminResponse: [{ value: '', disabled: true }],
      vendorId: [{ value: '', disabled: true }],
      adminId: [{ value: '', disabled: true }],
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
    this.refundService.getRefund(this.data.order_item_id).subscribe((response) => {
      const refundData = response.data;
      this.refundForm.patchValue(refundData);
      this.handleStatus(refundData.status_type as RefundStatus);
    });
  }

  enableNewRequestCreation(): void {
    this.enableEditableFields(['refundReason', 'requestTarget']);
  }

  handleStatus(status: RefundStatus): void {
    switch (status) {
      case RefundStatus.VendorPending:
        if (this.data.user_type === 'vendor') {
          this.enableEditableFields(['vendorResponse', 'statusType']);
        }
        break;
      case RefundStatus.AdminPending:
        if (this.data.user_type === 'admin') {
          this.enableEditableFields(['adminResponse', 'statusType']);
        }
        break;
      case RefundStatus.VendorApprove:
      case RefundStatus.AdminApprove:
        this.setClosedState(true);
        break;
      case RefundStatus.VendorReject:
        if (this.data.user_type === 'customer') {
          this.enableEditableFields(['refundReason', 'statusType']);
        }
        break;
      case RefundStatus.AdminReject:
        this.setClosedState(true);
        break;
      default:
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
    this.refundService.getRefund(this.data.order_item_id).subscribe((response) => {
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
        this.dialogRef.close(refundModel);
      }
    }
  }
}
