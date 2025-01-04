import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RefundService } from '../../../service/business/refund.service';
import { RefundScopeDataModel } from '../../../model/refund/refund.model';

@Component({
  selector: 'app-refund-dialog',
  templateUrl: './refund-dialog.component.html',
  styleUrls: ['./refund-dialog.component.css'],
})
/**
 * input : 身分,物品編號 (RefundScopeDataModel)
 * 進來後才發 api 取得申請表單資料
 * 依照身分及 api 回傳表單中 status 的允許修改不同欄位
 *
 * 此元件只包含申請後編輯與查看，創建申請不包含在此
 */
export class RefundDialogComponent implements OnInit {
  refundForm!: FormGroup;

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

    switch (this.data.user_type) {
      case 'vendor':
        this.vendorRefundInit();
        break;
      case 'admin':
        this.adminRefundInit();
        break;
      case 'customer':
        this.customerRefundInit();
        break;
      default:
        this.watchModeInit();
        break;
    }
  }

  vendorRefundInit(): void {
    this.refundService.getRefund(this.data.order_item_id).subscribe((response) => {
      const refundData = response.data;
      this.refundForm.patchValue(refundData);

      this.enableEditableFields(['vendorResponse']);
    });
  }

  adminRefundInit(): void {
    this.refundService.getRefund(this.data.order_item_id).subscribe((response) => {
      const refundData = response.data;
      this.refundForm.patchValue(refundData);

      this.enableEditableFields(['adminResponse','is_closed']);
    });
  }

  customerRefundInit(): void {
    this.refundService.getRefund(this.data.order_item_id).subscribe((response) => {
      const refundData = response.data;
      this.refundForm.patchValue(refundData);

      this.enableEditableFields(['refundReason']);
    });
  }

  enableEditableFields(fields: string[]): void {
    fields.forEach((field) => {
      this.refundForm.get(field)?.enable();
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.refundForm.valid) {
      this.dialogRef.close(this.refundForm.getRawValue());
    }
  }

  private watchModeInit() {
    this.refundService.getRefund(this.data.order_item_id).subscribe((response) => {
      const refundData = response.data;
      this.refundForm.patchValue(refundData);
    });
  }
}
