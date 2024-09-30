export interface OrderDetail {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: number;
  status: string;
  totalAmount: number;
  orderDate: string;
  seller: string;
  details: OrderDetail[];
}
