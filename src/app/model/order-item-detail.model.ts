export interface OrderItemDetailDTO {
  orderItemId: number; //productVariantID
  unitPrice: number;
  quantity: number;
  color: string;
  size: string;
  price: number; // totalAmount for single productVariant
}
