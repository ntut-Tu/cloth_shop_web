import { Component, OnInit } from '@angular/core';
import { CheckoutService } from "../../../service/business/checkout.service";
import {CartService} from "../../../service/business/cart.service";
import {ConfirmDiscountResponseModel} from "../../../model/checkout/confirm-oder.model";
import {ApiResponseDTO} from "../../../model/api-response.model";
import {CheckoutMapperService} from "../../../service/mappers/checkout-mapper.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  totalAmount: number = 0;
  shippingDiscountCode: string = '';
  tempDiscountCode: string = '';

  showOrderSummary: boolean = false;

  paymentMethod: string = 'credit_card' || 'cash_on_delivery';
  creditCardLastFour: string = '';
  deliveryType: string = 'delivery' || 'pickup';
  pickupStore: string = '';
  shippingAddress: string = '';

  constructor(protected checkoutService: CheckoutService,protected cartService: CartService,private checkoutMapperService : CheckoutMapperService) {}

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
    this.checkoutService.getSubmitOrderData().subscribe(submitOrderData => {
      if (submitOrderData) {
        submitOrderData.payment_method = this.paymentMethod;
        submitOrderData.credit_card_last_four = this.creditCardLastFour;
        submitOrderData.delivery_type = this.deliveryType;
        submitOrderData.pickup_store = this.pickupStore;
        submitOrderData.shipping_address = this.shippingAddress;
        // You can now use submitOrderData or pass it to another function
        this.checkoutService.submitOrderDataSubject.next(submitOrderData);
        console.log(submitOrderData);
      }
    });
    this.checkoutService.submitOrder();
    alert('Order submitted successfully!');
  }

  applyStoreDiscount(code: string, storeId: number): void {
    if (!code) return;
    this.checkoutService.applyDiscount(code, 'store_order', storeId).subscribe({
      next: (response: ApiResponseDTO<ConfirmDiscountResponseModel>) => {
        if (response.data.is_valid) {
          const orderData = this.checkoutService.orderDataSubject.getValue();
          // 根據返回的類型更新正確的欄位
          if (orderData && response.data.discount_type === 'special') {
            orderData.store_orders.find(
              (store) => store.store_id === storeId
            )!.special_discount_code = code;
          } else if (orderData && response.data.discount_type === 'seasonal') {
            orderData.store_orders.find(
              (store) => store.store_id === storeId
            )!.seasonal_discount_code = code;
          }
          // 更新 BehaviorSubject 的值
          this.checkoutService.orderDataSubject.next(orderData);
        } else {
          alert(response.message || 'Invalid Discount Code');
        }
      },
      error: (err) => {
        console.error('Failed to apply discount:', err);
        alert('An error occurred. Please try again.');
      },
    });
  }

  applyOrderDiscount(code: string): void {
    if (!code) return;
    this.checkoutService.applyDiscount(code, 'order').subscribe({
      next: (response: ApiResponseDTO<ConfirmDiscountResponseModel>) => {
        const orderData = this.checkoutService.orderDataSubject.getValue();
        if (orderData && response.data.is_valid) {
          // 更新全局訂單折扣
          orderData.shipping_discount_code = code;
          // 更新 BehaviorSubject 的值
          this.checkoutService.orderDataSubject.next(orderData);
        } else {
          alert(response.message || 'Invalid Discount Code');
        }
      },
      error: (err) => {
        console.error('Failed to apply order discount:', err);
        alert('An error occurred. Please try again.');
      },
    });
  }


}
