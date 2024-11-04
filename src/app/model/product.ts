export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  seller_id:  number;
  seller_name: string;
}
export interface CartItem extends Product {
  quantity: number;
}
