export interface ProductSummaryV2ResponseDTO {
  productId: number;
  name: string;
  totalSales: number;
  rate: number;
  imageUrl: string;
  category: string;
  storeName: string; // 賣家名稱
  storeImageUrl?: string; // 賣家頭像
  minPrice: number; // 商品最低價
  maxPrice: number; // 商品最高價
}

export interface PaginatedResponse {
  items: ProductSummaryV2ResponseDTO[];
  totalRecords: number;
}
