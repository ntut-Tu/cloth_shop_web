export interface StoreOrderSummary {
  storeOrderId: number;
  vendorId: number;
  seasonalDiscountId?: number;
  specialDiscountId?: number;
  shippingDiscountId?: number;
}
