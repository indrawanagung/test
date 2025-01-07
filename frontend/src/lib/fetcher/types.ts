export interface LoginResponse {
  header: HeaderResponse;
  data: string;
}
export interface RegisterRequest {
  full_name: string;
  email_address: string;
  phone_number: string;
  password: string;
}

export interface RegisterResponse {
  header: HeaderResponse;
  data: {
    user_id: string;
  } | null;
}

export interface ProductVariation {
  ID: string;
  VariationID: string;
  ProductID: string;
  OptionName: string;
  Description: string;
  Price: number;
  Product: Product;
  ProductStock: ProductStock;
  ProductVolume: ProductVolume;
  Variation: Variation;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
}
interface Variation {
  ID: string;
  VariationName: string;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
}
interface ProductVolume {
  ID: string;
  VariationOptionID: string;
  Width: number;
  Height: number;
  Length: number;
  Weight: number;
  WeightUnitID: string;
  WeightUnit: WeightUnit;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
}
interface WeightUnit {
  ID: string;
  UnitName: string;
}
interface ProductStock {
  ID: string;
  VariationOptionID: string;
  NotReserved: number;
  Reserved: number;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
}
interface Product {
  ID: string;
  Name: string;
  ProductCategoryID: string;
  StatusID: string;
  Price: number;
  Image: string;
  ProductCategory: ProductCategory;
  VariationOptions?: any;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
}
interface ProductCategory {
  ID: string;
  CategoryName: string;
}

export interface GetAllProductVariationResponse {
  header: HeaderResponse;
  data: ProductVariation[];
}

export interface CreateProductResponse {
  header: HeaderResponse;
  data: null;
}
