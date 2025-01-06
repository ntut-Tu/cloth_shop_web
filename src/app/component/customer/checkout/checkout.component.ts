import {Component, HostListener, OnInit} from '@angular/core';
import { CheckoutService } from "../../../service/business/checkout.service";
import {ConfirmDiscountResponseModel, mapConfirmDiscountResponse} from "../../../model/checkout/confirm-oder.model";
import { ApiResponseDTO } from "../../../model/api-response.model";
import {onImageError} from "../../../utils/image-utils.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  netAmount: number = 0;
  totalAmount: number = 0;
  discountAmount: number = 0;
  shippingFee: number = 0;
  shippingDiscountCode: string = '';
  tempDiscountCode: string = '';

  showOrderSummary: boolean = false;
  paymentMethod: string = 'credit_card';
  creditCardLastFour: string = '';
  deliveryType: string = 'delivery';
  pickupStore: string = '';
  shippingAddress: string = '';
  orderId: string = '';

  isFormDirty: boolean = false;
  constructor(protected checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.checkoutService.initializeOrder();
    this.calculateTotals();
  }

  /**
   * 計算總金額
   */
  calculateTotals(): void {
    this.totalAmount = 404;
    this.shippingFee = 404;
    this.discountAmount = 404;
    this.netAmount = 404;
  }

  /**
   * 確認金額
   */
  confirmAmount(): void {
    this.checkoutService.createReservation().subscribe({
      next: (response: ApiResponseDTO<any>) => {
        if (response.status) {
          const data = response.data;
          this.totalAmount = data.total_amount;
          this.shippingFee = data.shipping_fee;
          this.discountAmount = data.discount_amount;
          this.netAmount = data.final_amount;
          this.orderId = data.order_id;

          this.isFormDirty = true;
        } else {
          alert(response.message || 'Failed to confirm amount.');
        }
      },
      error: (err) => {
        console.error('Error confirming amount:', err);
        alert('Failed to confirm amount. Please try again.');
      },
    });
  }

  /**
   * 提交訂單
   */
  submitOrder(): void {
    this.checkoutService.submitOrder(this.orderId).subscribe({
      next: (response: ApiResponseDTO<any>) => {
        if (response.status) {
          alert('Order submitted successfully!');
          this.checkoutService.clearOrder();
          this.isFormDirty = false;
        } else {
          alert(response.message || 'Failed to submit order.');
        }
      },
      error: (err) => {
        console.error('Error submitting order:', err);
        alert('Failed to submit order. Please try again.');
      },
    });
  }

  /**
   * 應用折扣碼
   */
  applyDiscount(code: string, type: 'order' | 'store_order', storeId?: number): void {
    if (!code) return;
    this.checkoutService.applyDiscount(code, type, storeId).subscribe({
      next: (response: ApiResponseDTO<ConfirmDiscountResponseModel>) => {
        const ret = mapConfirmDiscountResponse(response.data)
        if (ret.is_valid) {
          alert('Discount applied successfully!');
          this.calculateTotals();
          this.tempDiscountCode = code;
          this.checkoutService.saveDiscountCode(code,ret.coupon?.discountType,storeId,ret.discount_type === 'store');
        } else {
          alert(response.message || 'Invalid discount code.');
        }
      },
      error: (err) => {
        console.error('Error applying discount:', err);
        alert('Failed to apply discount. Please try again.');
      },
    });
  }

  @HostListener('window:beforeunload', ['$event'])
  handleBeforeUnload(event: Event): void {
    this.cancelCheckout();
  }

  cancelCheckout(): void {
    this.checkoutService.cancelOrder(this.orderId).subscribe({
      next: (response: ApiResponseDTO<any>) => {
        console.log('Checkout cancelled successfully');
      },
      error: (err) => {
        console.error('Error cancelling checkout:', err);
      },
    });
  }

  protected readonly onImageError = onImageError;

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: BeforeUnloadEvent): void {
    if (this.isFormDirty) {
      $event.preventDefault();
      $event.returnValue = '您尚未完成結帳操作，離開將導致資料遺失。是否確定要離開？';
    }
  }
}
