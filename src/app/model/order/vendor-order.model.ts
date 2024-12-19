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

// private Integer storeOrderId;
// private String imageUrl;
// private String vendorCouponCode;
// private Integer totalAmount;
// private Integer totalDiscount;
// private Integer totalNetAmount;
// private List<VendorUserOrderDTO> orders;
// private String storeOrderStatus;
// private String orderDate;
// public class VendorUserOrderDTO {
//   private Integer productId;
//   private String productName;
//   private List<VendorProductVariantDTO> productVariants;}
// public class VendorProductVariantDTO {
//   private Integer
//   productVariantId;
//   private String
//   color;
//   private String
//   size;
//   private Integer
//   quantity;
// }
