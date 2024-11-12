import { Injectable } from '@angular/core';
import {UserInfoModel} from "../../model/outdated/user-info.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserManageService {
  getUserList():Observable<UserInfoModel[]>{
    const userList:UserInfoModel[]=[
      {
        id:1,
        account:'admin',
        establishDate:20240930,
        accountStatus:'active',
        accountType:'admin'
      },{
        id:2,
        account:'customer',
        establishDate:20240930,
        accountStatus:'active',
        accountType:'customer'
      },{
        id:3,
        account:'vendor',
        establishDate:20240930,
        accountStatus:'active',
        accountType:'vendor'
      },{
        id:4,
        account:'troll',
        establishDate:19000101,
        accountStatus:'deactivate',
        accountType:'god'
      }
    ]
    return of(userList);
  }
}
