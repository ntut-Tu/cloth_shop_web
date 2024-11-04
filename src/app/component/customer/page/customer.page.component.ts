import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer.page.component.html',
  styleUrls: ['./customer.page.component.css']
})
export class CustomerPageComponent implements OnInit {
  showCart: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.checkCurrentRoute();

    // 當切到其他route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkCurrentRoute();
      }
    });
  }

  checkCurrentRoute(): void {
    // AI寫的確認是否點到product
    const currentRoute = this.activatedRoute.firstChild?.snapshot.url[0]?.path;
    this.showCart = currentRoute === 'products';
  }

  logout() {
    // 應清除user的登入資訊
    this.router.navigate(['/login']);  // 回首頁
  }
}
