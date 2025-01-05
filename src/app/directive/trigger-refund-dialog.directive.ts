import { Directive, Input, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {RefundDialogComponent} from "../component/shared/refund-dialog/refund-dialog.component";

@Directive({
  selector: '[appTriggerRefundDialog]',
  standalone: true
})
export class TriggerRefundDialogDirective {
  @Input() orderItemId!: number; // 動態傳入基礎數據
  @Input() userType!: string; // 用戶角色

  constructor(private dialog: MatDialog) {}

  @HostListener('click')
  openRefundDialog(): void {
    if (!this.orderItemId || !this.userType) {
      console.error('Order Item ID or user type is missing.');
      return;
    }

    this.dialog.open(RefundDialogComponent, {
      width: '600px',
      data: {
        orderItemId: this.orderItemId,
        userType: this.userType,
      },
    });
  }
}
