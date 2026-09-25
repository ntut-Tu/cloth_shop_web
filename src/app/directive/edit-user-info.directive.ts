import { Directive, HostListener, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {UserProfileEditionService} from "../service/business/user-profile-edition.service";
import {EditProfileComponent} from "../component/shared/edit-profile/edit-profile.component";

@Directive({
  standalone: true,
  selector: '[appEditUserInfo]'
})
export class EditUserInfoDirective {
  constructor(
    private dialog: MatDialog,
    private userProfileEditionService: UserProfileEditionService
  ) {}

  @HostListener('click')
  onClick(): void {
    this.userProfileEditionService.getUserInfo().subscribe(response => {
      const userInfo = response.data;
      this.dialog.open(EditProfileComponent, {
        width: '800px',
        height: 'auto',
        data: userInfo // 傳遞用戶資料
      });
    });
  }
}
