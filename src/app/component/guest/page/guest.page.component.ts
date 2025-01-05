import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {GuestLoginDialogComponent} from "../login.dialog/guest.login.dialog.component";
import {GuestRegisterDialogComponent} from "../register.dialog/guest.register.dialog.component";
import { EditProfileComponent } from "../../shared/edit-profile/edit-profile.component";
import { UserProfileEditionService } from "../../../service/business/user-profile-edition.service";


@Component({
  selector: 'app-guest.page',
  templateUrl: './guest.page.component.html',
  styleUrl: './guest.page.component.css'
})
export class GuestPageComponent implements OnInit {
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
    // this.showCart = currentRoute === 'products';
  }

  login() {
    const dialogRef = this.dialog.open(GuestLoginDialogComponent, {
      width: '400px',
      height: 'auto',
      disableClose: true, // Prevent closing by clicking outside the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'register') {
        this.register(); // 如果結果是 'register'，則打開註冊對話框
      }
    });
  }

  register() {
    const dialogRef= this.dialog.open(GuestRegisterDialogComponent, {
      width: '400px',
      height: 'auto',
      disableClose: true, // Prevent closing by clicking outside the dialog
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'login') {
        this.login(); // 如果結果是 'register'，則打開註冊對話框
      }
    });
  }

  // 提供用戶編輯資料
  editUserInfo(): void {
    // const fakeUserInfo = { username: 'testuser', email: 'testuser@example.com', phoneNumber: '1234567890', password: 'testpassword', profilePicUrl: 'https://via.placeholder.com/100' };
    // const dialogRef = this.dialog.open(EditProfileComponent, {
    //   width: '500px', height: '600px', data: fakeUserInfo // 使用假數據傳遞給對話框
    // });
    this.userProfileEditionService.getUserInfo().subscribe(response => {
      const userInfo = response.data;
      const dialogRef = this.dialog.open(EditProfileComponent, {
        width: '800px',
        height: 'auto',
        data: userInfo // 傳遞用戶資料
      });
    });
  }
}
