import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { UserRole } from '../../../model/user.role';

@Component({
  selector: 'app-login-page',
  templateUrl: './home.login.page.component.html',
  styleUrls: ['./home.login.page.component.css']
})
export class HomeLoginPageComponent {
  username: string = '';
  password: string = '';
  role: UserRole = UserRole.Customer;

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
