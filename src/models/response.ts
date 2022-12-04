import { StoreInterface, StoreItemInterface } from "./store";

export interface CommonResponse {
  type: string;
  message: string;
  status: number;
  success: boolean;
}
export interface getAllStoresAndItemsResponse extends CommonResponse {
  data: StoreInterface[];
}

export interface createStoreResponse extends CommonResponse {
  data: StoreInterface;
}
export interface deleteStoreResponse extends CommonResponse {
  data: StoreInterface;
}

export interface getStoreItemsResponse extends CommonResponse {
  data: StoreInterface;
}

export interface addStoreItemResponse extends CommonResponse {
  data: StoreItemInterface;
}

export interface deleteStoreItemResponse extends CommonResponse {
  // TODO change reponse
}

export interface updateStoreItemResponse extends CommonResponse {
  data: { count: number };
}
