export interface VendorOrderModel{
  storeOrderId: number;
  imageUrl: String;
  vendorCouponCode: String;
  totalAmount: number;
  totalDiscount: number;
  totalNetAmount: number;
  orders: VendorUserOrderModel[];
  storeOrderStatus: String;
  orderPayStatus: String;
  orderDate: String;
}

export interface VendorUserOrderModel{
  productId: number;
  productName: String;
  productVariants: VendorProductVariantModel[];
}

export interface VendorProductVariantModel{
  productVariantId: number;
  color: String;
  size: String;
  quantity: number;
}
