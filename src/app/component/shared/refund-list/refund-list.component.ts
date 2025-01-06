import {Component, OnInit} from '@angular/core';
import {RefundService} from "../../../service/business/refund.service";
import {RefundListSumResponse} from "../../../model/refund/refund.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-refund-list',
  templateUrl: './refund-list.component.html',
  styleUrl: './refund-list.component.css'
})
// 只有已存在的會顯示在這
export class RefundListComponent implements OnInit {
  refundsList : RefundListSumResponse[] = [];
  displayedColumns: string[] = ['refund_id', 'item_name', 'refund_status', 'action'];
  user_type: string = '';

  constructor(private refundService: RefundService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.user_type = params['user_type'] || '';
    });
    this.refundService.getRefundList().subscribe((response) => {
      this.refundsList = response.data;
    });
  }
}
