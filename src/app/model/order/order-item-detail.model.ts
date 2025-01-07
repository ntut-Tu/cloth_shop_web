export interface OrderItemDetailDTO {
  orderItemId: number; //productVariantID
  unit_price: number;
  quantity: number;
  total_price: number;
  order_image_url: string;
  product_name: string;
  size: string;
  color: string;
}
