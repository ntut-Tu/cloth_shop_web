export interface OrderSummary {
  orderId: number;
  orderDate: string;  // 可以根據需要轉換為 Date 格式
  totalAmount: number;
  payStatus: string;
  shipStatus: string;
}
