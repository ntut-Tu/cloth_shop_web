import {Component, OnInit} from '@angular/core';
import {UserInfoModel} from "../../../model/outdated/user-info.model";
import {UserManageService} from "../../../service/mock/user-manage.service";

@Component({
  selector: 'app-admin.user.management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent implements OnInit{
  users:UserInfoModel[]=[];
  toggledOrderIndex: number | null = null;

  constructor(private userManageService:UserManageService) {}
  ngOnInit(): void {
    this.userManageService.getUserList().subscribe((users)=>{
      this.users=users;
    })
  }
  toggleDetails(index: number): void {
    this.toggledOrderIndex = this.toggledOrderIndex === index ? null : index;
  }
}
