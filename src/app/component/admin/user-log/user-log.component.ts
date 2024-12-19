import { AfterViewInit, Component, OnInit, HostListener } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserLogModel } from "../../../model/user-manage/user-log.model";
import { UserManageService } from "../../../service/business/user-manage.service";

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.css']
})
export class UserLogComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['logId', 'userId', 'username', 'action', 'date'];
  dataSource = new MatTableDataSource<UserLogModel>([]);
  isLoading = false; // 標記是否正在加載
  noMoreData = false; // 標記是否已經加載完所有數據
  page = 0; // 當前頁數
  pageSize = 10; // 每頁大小
  totalLogs = 0; // 總數據量

  constructor(private userManageService: UserManageService) {}

  ngOnInit(): void {
    this.loadLogs();
  }

  ngAfterViewInit(): void {}

  loadLogs(): void {
    if (this.isLoading || this.noMoreData) return; // 防止重複請求或請求無效

    this.isLoading = true;
    this.userManageService.getUserLogs(this.page, this.pageSize).subscribe(
      (response) => {
        const logs = response.data; // 從後端獲取資料
        if (logs.length < this.pageSize) {
          this.noMoreData = true; // 如果返回的資料少於 pageSize，標記為已無更多資料
        }
        this.dataSource.data = [...this.dataSource.data, ...logs]; // 拼接數據
        this.page++; // 下一頁
        this.isLoading = false;
      },
      (error) => {
        console.error('Failed to fetch logs', error);
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
      !this.noMoreData
    ) {
      this.loadLogs();
    }
  }
}
