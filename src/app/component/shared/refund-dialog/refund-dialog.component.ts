import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RefundService} from "../../../service/business/refund.service";
import {RefundScopeDataModel} from "../../../model/refund/refund.model";

@Component({
  selector: 'app-refund-dialog',
  templateUrl: './refund-dialog.component.html',
  styleUrl: './refund-dialog.component.css'
})
export class RefundDialogComponent implements OnInit {
  refundForm !: FormGroup;

  constructor( private fb: FormBuilder,
               private dialogRef: MatDialogRef<RefundDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: RefundScopeDataModel,
               private refundService: RefundService
  ) {}
  ngOnInit(): void{
    switch (this.data.user_type) {
      case 'vendor':
        this.vendorRefundInit();
        break;
      case 'admin':
        break;
      case 'customer':
        break;
    }
    this.refundForm = this.fb.group({
     orderItemId: [''],
     requestTarget: [''],
     statusType: [''],
     isClosed: [''],
     refundReason: [''],
     vendorResponse: [''],
     adminResponse: [''],
     vendorId: [''],
     adminId: ['']
   });
  }


  vendorRefundInit(): void{
    this.refundService.getRefund(this.data.order_item_id).subscribe(response => {
      this.refundForm.get('orderItemId')?.setValue(response.data.order_item_id);
      this.refundForm.get('requestTarget')?.setValue(response.data.request_target);
      this.refundForm.get('statusType')?.setValue(response.data.status_type);
      this.refundForm.get('isClosed')?.setValue(response.data.is_closed);
      this.refundForm.get('refundReason')?.setValue(response.data.refund_reason);
      this.refundForm.get('vendorResponse')?.setValue(response.data.vendor_response);
      this.refundForm.get('adminResponse')?.setValue(response.data.admin_response);
      this.refundForm.get('vendorId')?.setValue(response.data.vendor_id);
      this.refundForm.get('adminId')?.setValue(response.data.admin_id);
    })
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
