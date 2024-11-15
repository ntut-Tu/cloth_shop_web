import { Component, OnInit } from '@angular/core';
import { CheckoutService } from "../../../service/business/checkout.service";
import {CartService} from "../../../service/business/cart.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  totalAmount: number = 0;
  shippingDiscountCode: string = '';
  constructor(protected checkoutService: CheckoutService,protected cartService: CartService) {}

  ngOnInit(): void {
    this.checkoutService.initializeOrder();
    this.calculateTotals();
  }

  /**
   * 計算總金額
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
