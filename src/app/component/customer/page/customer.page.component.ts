import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { EditProfileComponent } from "../../shared/edit-profile/edit-profile.component";
import { UserProfileEditionService } from "../../../service/business/user-profile-edition.service";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-customer-page',
  templateUrl: './customer.page.component.html',
  styleUrls: ['./customer.page.component.css']
})
export class CustomerPageComponent implements OnInit {
  showCart: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private userProfileEditionService: UserProfileEditionService,
  ) {}

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

  // 提供用戶編輯資料
  editUserInfo(): void {
    this.userProfileEditionService.getUserInfo().subscribe(response => {
      const userInfo = response.data;
      const dialogRef = this.dialog.open(EditProfileComponent, {
        width: '800px',
        height: 'auto',
        data: userInfo // 傳遞用戶資料
      });
    });
  }

  logout() {
    // 應清除user的登入資訊
    this.router.navigate(['/']);  // 回首頁
  }
}
