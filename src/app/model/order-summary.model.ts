export interface OrderSummaryModel {
  orderId: number;
  orderDate: string;  // 可以根據需要轉換為 Date 格式
  totalAmount: number;
  payStatus: string;
  shipStatus: string;
  orderSummaryDetail ?: OrderSummaryDetailModel;
}
export interface OrderSummaryDetailModel {
  creditCardLastFour?: number;
  paymentMethod: string;
  shippingAddress?: string;
  shippingMethod: string;
}
