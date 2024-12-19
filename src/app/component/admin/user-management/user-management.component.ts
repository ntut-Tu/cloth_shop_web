import { AfterViewInit, Component, OnInit, HostListener } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserManageService } from "../../../service/business/user-manage.service";
import { UserInfoModel } from "../../../model/user-manage/user-info.model";

@Component({
  selector: 'app-admin.user.management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'userName', 'email', 'role', 'establishDate', 'isActive','ban-button'];
  dataSource = new MatTableDataSource<UserInfoModel>([]);
  totalUsers: number = 0;
  pageSize: number = 10;
  page: number = 0;
  selectedRow: UserInfoModel | null = null;
  endOfData: boolean = false;
  isLoading: boolean = false;

  constructor(private userManageService: UserManageService) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.page = 0; // 確保每次進入頁面時從第一頁開始
    this.loadUsers();
  }

  loadUsers(): void {
    if (this.isLoading || this.endOfData) return;

    this.isLoading = true;
    this.userManageService.getUsers(this.page, this.pageSize).subscribe(
      (response) => {
        const newData = response.data;
        this.dataSource.data = [...this.dataSource.data, ...newData];
        this.totalUsers = this.dataSource.data.length;

        if (newData.length < this.pageSize) {
          this.endOfData = true; // 如果新數據小於 pageSize，標記為結束
        }
        this.page++;
        this.isLoading = false;
      },
      (error) => {
        console.error('Failed to fetch users', error);
        this.isLoading = false;
      }
    );
  }

  // 監聽全頁滾動事件
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (
      scrollTop + clientHeight >= scrollHeight - 1 &&
      !this.isLoading &&
      !this.endOfData
    ) {
      this.loadUsers();
    }
  }

  toggleDetails(row: UserInfoModel | null): void {
    this.selectedRow = row;
  }

  banUser(id: number | undefined) {
    if(!id) return;
    this.userManageService.banUser(id).subscribe(
      (response) => {
        this.loadUsers();
      },
      (error) => {
        console.error('Failed to ban user', error);
      }
    );
  }
}
