export interface StoreOrderSummaryModel {
  storeOrderId: number;
  storeName: String;
  imageUrl?: String;
  vendorCouponCode?: String;
}

// storeOrderId: 'S123',
//   storeName: '商店 A',
//   imageUrl: 'assets/storeA-logo.png',
//   vendorCouponCode: 'VCOUPON20',
