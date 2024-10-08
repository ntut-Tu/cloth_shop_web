// register.page.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import {UserRole} from "../../../model/user.role"; // 登入驗證

@Component({
  selector: 'app-register-page',
  templateUrl: './home.register.page.component.html',
  styleUrls: ['./home.register.page.component.css']
})
export class HomeRegisterPageComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  role: UserRole = UserRole.Customer; // 默認= customer

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('密碼與確認密碼不一致');
      return;
    }

    this.authService.register(this.username, this.email, this.password, this.role).subscribe(
      (isRegistered) => {
        if (isRegistered) {
          alert('註冊成功！請登入');
          this.router.navigate(['/login']);
        } else {
          alert('註冊失敗，請稍後再試');
        }
      },
      (error) => {
        console.error('註冊失敗', error);
        alert('註冊失敗，伺服器錯誤');
      }
    );
  }
}
