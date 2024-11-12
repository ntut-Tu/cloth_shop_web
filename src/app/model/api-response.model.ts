export interface ApiResponseDTO<T> {
  status: boolean;
  message: string;
  data: T;
}
