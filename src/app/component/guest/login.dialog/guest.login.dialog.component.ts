import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/business/auth.service';
import { UserRoleModel } from '../../../model/user-role.model';

@Component({
  selector: 'app-guest-login-dialog',
  templateUrl: './guest.login.dialog.component.html',
  styleUrls: ['./guest.login.dialog.component.css']
})
export class GuestLoginDialogComponent {
  username: string = '';
  password: string = '';
  role: UserRoleModel = UserRoleModel.Customer;

  constructor(
    private authService: AuthService,
    private router: Router,
    public dialogRef: MatDialogRef<GuestLoginDialogComponent>, // 用於關閉對話框
    @Inject(MAT_DIALOG_DATA) public data: any // 傳入數據
  ) {}

  onLogin() {
    if (this.dialogRef.getState()) {
      return; // Skip login if the dialog was closed with 'register'
    }
    this.authService.login(this.username, this.password, this.role).subscribe({
      next: (isAuthenticated) => {
        if (isAuthenticated) {
          if (this.role === 'admin') {
            this.router.navigate(['/admin']);
          } else if (this.role === 'customer') {
            this.router.navigate(['/customer']);
          } else if (this.role === 'vendor') {
            this.router.navigate(['/vendor']);
          }
          this.dialogRef.close(true); // 關閉對話框，返回成功
        } else {
          alert('登入失敗，帳號密碼錯誤');
        }
      },
      error: (error) => {
        console.error('登入失敗', error);
        alert('登入失敗，伺服器錯誤');
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close(false); // 點擊取消時關閉對話框
  }

  onRegister() {
    this.dialogRef.close('register'); // 點擊註冊時關閉對話框並傳遞 'register'
  }
}
