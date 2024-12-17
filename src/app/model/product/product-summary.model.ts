
export interface ProductSummaryModel {
  productId: number;
  name: string;
  totalSales: number;
  rate: number;
  imageUrl: string;
  category: string;
  storeName: string;
  storeImageUrl?: string;
}
export interface ProductVariant {
  productVariantId : number;
  color : string;
  stock : number;
  size : string;
  price :  number;
}
export interface AddProductRequest{
  name : string;
  description  : string;
  imageUrl : string;
  category  : string;
  isList : boolean;
  productVariants: ProductVariant[];
}
export interface ProductDetail {
  productId: number;
  name: string;
  description: string;
  totalSales: number;
  rate: number;
  imageUrl: string;
  category: string;
  isList: boolean;
  fkReviewId: number | null;
  fkVendorId: number;
  storeDescription: string;
  storeAddress: string;
  storeLogoUrl: string;
  productVariants: ProductVariant[]; // List of variants
}
export interface CartItem {
  productVariantId : number;
  name: string;
  imageUrl: string;
  color : string;
  stock : number;
  size : string;
  price :  number;
  quantity: number;
  fkVendorId: number;
  storeDescription: string;
}
