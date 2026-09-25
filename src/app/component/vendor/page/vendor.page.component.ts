// customer.page.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-page',
  templateUrl: './vendor.page.component.html',
  styleUrls: ['./vendor.page.component.css']
})
export class VendorPageComponent {
  constructor(private router: Router) {}

  logout() {
    // 登出邏輯
    this.router.navigate(['/']);  // 回首頁
  }
}
