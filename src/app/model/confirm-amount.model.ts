export interface CartItemDTO {
  productVariantId:number;
  quantity:number;
}
export interface ConfirmAmountRequestDTO {
  cartItems:CartItemDTO[];
  shippingDiscountCode:string;
  seasonalDiscountCode:string;
  specialDiscountCode:string;
}
export interface ConfirmAmountResponseDTO {
  totalAmount:number;
  shippingFee:number;
  discountAmount:number;
  finalAmount:number;
}
