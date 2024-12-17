import {Component, Inject} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/business/auth.service';
import { UserRoleModel } from '../../../model/user-role.model';
import { RegisterRequestModel } from '../../../model/register-request.model';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-register-page',
  templateUrl: './guest.register.dialog.component.html',
  styleUrls: ['./guest.register.dialog.component.css']
})
export class GuestRegisterDialogComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  role: UserRoleModel = UserRoleModel.Customer;

  // Step tracking
  step: number = 1;

  // Vendor-specific fields
  storeAddress?: string;
  storeDescription?: string;
  storeLogoUrl?: string;
  paymentAccount?: string;

  // Customer-specific fields
  defaultShippingAddress?: string;
  billingAddress?: string;

  constructor(private authService: AuthService,
              private router: Router,
              public dialogRef: MatDialogRef<GuestRegisterDialogComponent>, // 用於關閉對話框
              @Inject(MAT_DIALOG_DATA) public data: any // 傳入數據
            ) {}

  onNextStep() {
    if (this.password !== this.confirmPassword) {
      alert('密碼與確認密碼不一致');
      return;
    }
    this.authService.checkUser(this.username, this.role).subscribe({
      next: (exists) => {
        if (exists) {
          alert('此帳號已存在');
        } else {
          this.step = 2; // 進入下一步驟
        }
      },
      error: (error) => {
        console.error('Check user failed', error);
        alert('伺服器錯誤，請稍後再試');
      }
    });
  }

  onRegister() {
    const registerData: RegisterRequestModel = {
      account: this.username,
      email: this.email,
      password: this.password,
      role: this.role,
      storeAddress: this.storeAddress,
      storeDescription: this.storeDescription,
      storeLogoUrl: this.storeLogoUrl,
      paymentAccount: this.paymentAccount,
      defaultShippingAddress: this.defaultShippingAddress,
      billingAddress: this.billingAddress
    };

    this.authService.registerDetails(registerData).subscribe({
      next: (isRegistered) => {
        if (isRegistered) {
          alert('註冊成功！請登入');
          this.router.navigate(['/login']);
        } else {
          alert('註冊失敗，請稍後再試');
        }
      },
      error: (error) => {
        console.error('註冊失敗', error);
        alert('註冊失敗，伺服器錯誤');
      }
    });
  }
  onClose() {
    this.dialogRef.close();
  }
  onLogin() {
    this.dialogRef.close('login');
  }
}