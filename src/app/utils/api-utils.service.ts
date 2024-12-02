import {ApiResponseDTO} from "../model/api-response.model";


export function inputTranslator<T>(data: any, mapFn: (input: any) => T): T {
  return mapFn(data);
}

export function inputArrayTranslator<T>(dataArray: any[], mapFn: (input: any) => T): T[] {
  return dataArray.map(mapFn);
}

/**
 * 將 ApiResponseDTO 的 data 屬性映射為新的模型
 * @param response 從後端返回的 ApiResponseDTO
 * @param mapFn 將 data 屬性轉換為目標模型的映射函數
 * @returns 包含轉換後 data 的 ApiResponseDTO
 */
export function mapApiResponseData<T, U>(
  response: ApiResponseDTO<T>,
  mapFn: (data: T) => U
): ApiResponseDTO<U> {
  return {
    ...response,
    data: mapFn(response.data),
  };
}

// ============================================ map ============================================


