import { Component, OnInit } from '@angular/core';
import {CheckoutService} from "../../../service/business/checkout.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  totalAmount: number = 0;

  constructor(protected checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.checkoutService.loadCartItems();
    this.calculateTotals();
  }

  /**
   * 應用折扣並重新計算
   */
  applyDiscount(code: string, type: 'order' | 'store_order', storeId?: number): void {
    this.checkoutService.applyDiscount(code, type, storeId).subscribe(valid => {
      if (valid) this.calculateTotals();
    });
  }

  /**
   * 計算總金額，包含折扣和其他優惠
   */
  calculateTotals(): void {
    this.checkoutService.calculateTotals().subscribe(response => {
      this.totalAmount = response.data.final_amount;
    });
  }

  /**
   * 提交訂單
   */
  submitOrder(): void {
    this.checkoutService.submitOrder();
    alert('Order submitted successfully!');
  }
}
