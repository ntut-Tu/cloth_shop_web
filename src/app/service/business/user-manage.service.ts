import {Injectable} from "@angular/core";
import {UserManageApiService} from "../api/user-manage-api.service";

@Injectable({
  providedIn: 'root'
})

export class UserManageService {

  constructor(private userManageApiService: UserManageApiService) { }
  getUsers(page: number, pageSize: number) {
    return this.userManageApiService.getUsers(page, pageSize);
  }

  banUser(userId: number) {
    return this.userManageApiService.banUser(userId);
  }
}
