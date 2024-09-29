import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin.page.component.html',
  styleUrls: ['./admin.page.component.css']
})
export class AdminPageComponent {
  constructor(private router: Router) {}

  logout() {
    // 登出邏輯
    this.router.navigate(['/login']);  // 回homepage
  }
}
