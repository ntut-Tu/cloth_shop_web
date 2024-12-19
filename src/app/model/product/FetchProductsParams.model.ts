export interface FetchProductsParams {
  page: number;
  pageSize: number;
  category?: string | null;
  sort?: string | null;
  search?: string | null;
  role: string;
}
