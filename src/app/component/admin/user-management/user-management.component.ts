import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserManageService } from "../../../service/business/user-manage.service";
import { UserInfoModel } from "../../../model/user-info.model";

@Component({
  selector: 'app-admin.user.management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
// TODO : receive user data from backend success, but not display in the table
export class UserManagementComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userName', 'email', 'role', 'establishDate', 'isActive'];
  dataSource = new MatTableDataSource<UserInfoModel>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  totalUsers: number = 0;
  pageSize: number = 20;
  page: number = 0;
  selectedRow: UserInfoModel | null = null;

  constructor(private userManageService: UserManageService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadUsers(): void {
    this.userManageService.getUsers(this.page, this.pageSize).subscribe(
      (response) => {
        const data = response.data;
        this.dataSource.data = data;

        // 动态估算总条目数
        if (data.length < this.pageSize) {
          this.totalUsers = this.page * this.pageSize + data.length; // 当前加载的总条目数
        } else {
          this.totalUsers = (this.page + 1) * this.pageSize + 1; // 假设还有更多数据
        }
      },
      (error) => {
        console.error('Failed to fetch users', error);
      }
    );
  }

  onPageChange(event: any): void {
    this.page = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadUsers();
  }

  toggleDetails(row: UserInfoModel): void {
    this.selectedRow = this.selectedRow === row ? null : row;
  }

  banUser(id: number) {
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
