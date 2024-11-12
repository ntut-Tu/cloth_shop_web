export interface StoreOrderSummaryModel {
  storeOrderId: number;
  vendorId: number;
  seasonalDiscountId?: number;
  specialDiscountId?: number;
  shippingDiscountId?: number;
}
