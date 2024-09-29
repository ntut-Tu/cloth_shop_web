import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer.page.component.html',
  styleUrls: ['./customer.page.component.css']
})
export class CustomerPageComponent {
  constructor(private router: Router) {}

  logout() {
    // 登出邏輯
    this.router.navigate(['/login']);  // 回首頁
  }
}
