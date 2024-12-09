export interface OrderSummaryModel {
  orderId: number;
  orderDate: string;  // 可以根據需要轉換為 Date 格式
  totalAmount: number;
  shippingDiscountCode: string;
  payStatus: string;
  shipStatus: string;
  orderSummaryDetail ?: OrderSummaryDetailModel;
}
export interface OrderSummaryDetailModel {
  creditCardLastFour?: string;
  paymentMethod: string;
  shippingAddress?: string;
  shippingMethod: string;
}

// { orderId: 'O67890', orderDate: '2024-12-08', totalAmount: 300, shippingDiscountCode: null, shipStatus: 'Delivered' ,payStatus: 'Paid'},
