import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/business/auth.service';
import { UserRoleModel } from '../../../model/user-role.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './guest.login.dialog.component.html',
  styleUrls: ['./guest.login.dialog.component.css']
})
export class GuestLoginDialogComponent {
  username: string = '';
  password: string = '';
  role: UserRoleModel = UserRoleModel.Customer;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
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
}
