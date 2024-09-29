// login.admin.page.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service'; // 登入驗證

@Component({
  selector: 'app-login-page',
  templateUrl: './homepage.login.page.component.html',
  styleUrls: ['./homepage.login.page.component.css']
})
export class HomepageLoginPageComponent {
  username: string = '';
  password: string = '';
  role: string = 'customer'; // 默認= customer

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.username, this.password, this.role).subscribe(
      (isAuthenticated) => {
        if (isAuthenticated) {
          // 跳轉
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
      (error) => {
        console.error('登入失敗', error);
        alert('登入失敗，伺服器錯誤');
      }
    );
  }
}
