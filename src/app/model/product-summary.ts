import {Product} from "./product";

export interface ProductSummary {
  productId: number;
  name: string;
  totalSales: number;
  rate: number;
  imageUrl: string;
  category: string;
  storeDescription: string;
}
export interface ProductVariant {
  productVariantId : number;
  color : string;
  stock : number;
  size : string;
  price :  number;
}
export interface AddProductRequest{
  productId : number;
  name : string;
  description  : string;
  imageUrl : string;
  category  : string;
  isList : boolean;
  fkVendorId :number;
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
