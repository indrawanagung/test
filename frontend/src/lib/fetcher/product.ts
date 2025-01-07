export interface Product {
  ID: string;
  Name: string;
  ProductCategoryID: string;
  StatusID: string;
  Price: number;
  Image: string;
  ProductCategory: ProductCategory;
  VariationOptions: VariationOption[]
  created_at: string;
  updated_at: string;
  deleted_at: any;
}

export interface ProductCategory {
  ID: string;
  CategoryName: string;
}
export interface ProductsResponse {
  header: HeaderResponse;
  data: Product[];
}

export const getProducts = async (): Promise<ProductsResponse> => {
  // Request to the external login API
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  // Parse the response
  const data = await response.json();

  // Return the token if needed
  return data;
};

export interface ProductDetail {
  ID: string;
  Name: string;
  ProductCategoryID: string;
  StatusID: string;
  Price: number;
  Image: string;
  ProductCategory: ProductCategory;
  VariationOptions: VariationOption[];
  created_at: string;
  updated_at: string;
  deleted_at?: any;
}
interface VariationOption {
  ID: string;
  VariationID: string;
  Price: number;
  ProductID: string;
  OptionName: string;
  Description: string;
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

export interface ProductResponse {
  header: HeaderResponse;
  data: ProductDetail;
}

export const getProduct = async (id: string): Promise<ProductResponse> => {
  try {
    // Request to the external login API
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Parse the response
    const data = await response.json();

    // Return the token if needed
    return data;
  } catch (error) {
    throw new Error(`something error!`);
  }
};

export interface addProductCartRequest {
  VariationOptionID: string;
  Qty: number;
}
export interface addProductCartResponse {
  header: HeaderResponse;
  data: null;
}
export const addProductCart = async (
  request: addProductCartRequest,
  token: string
): Promise<addProductCartResponse> => {
  try {
    // Request to the external login API
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/carts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(request),
      }
    );

    // Parse the response
    const data = await response.json();

    // Return the token if needed
    return data!;
  } catch (error) {
    console.log(error);
    throw new Error("something error");
  }
};

export interface ProductCart {
  ID: string;
  VariationOptionID: string;
  Qty: number;
  UserID: string;
  VariationOption: VariationOption;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
}
interface VariationOption {
  ID: string;
  VariationID: string;
  ProductID: string;
  OptionName: string;
  Description: string;
  Product: Product;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
}

export interface getAllProductCartResponse {
  header: HeaderResponse;
  data: ProductCart[];
}
export const getAllProductCart = async (
  token: string
): Promise<getAllProductCartResponse> => {
  // Request to the external login API
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/carts`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }
  );

  // Parse the response
  const data = await response.json();

  // Return the token if needed
  return data!;
};

export interface deleteProductCartResponse {
  header: HeaderResponse;
  data: null;
}

export const deleteProductCart = async (
  token: string,
  id: string
): Promise<deleteProductCartResponse> => {
  try {
    // Request to the external login API
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/carts/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );

    // Parse the response
    const data = await response.json();

    // Return the token if needed
    return data!;
  } catch (error) {
    console.log(error);
    throw new Error("something error");
  }
};

export interface PaymentType {
  ID: string;
  Name: string;
}
export interface getAllPaymentTypesResponse {
  header: HeaderResponse;
  data: PaymentType[];
}

export const getAllPaymentTypes = async (
  token: string
): Promise<getAllPaymentTypesResponse> => {
  try {
    // Request to the external login API
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/payment_types`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );

    // Parse the response
    const data = await response.json();

    // Return the token if needed
    return data!;
  } catch (error) {
    console.log(error);
    throw new Error("something error");
  }
};

export interface CheckoutRequest {
  PaymentTypeID : string
}

export interface CheckoutResponse {
  header : HeaderResponse
  data: null
}
export const checkout = async (
  token: string,
  request : CheckoutRequest
): Promise<CheckoutResponse> => {
  try {
    // Request to the external login API
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/checkout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body : JSON.stringify(request)
      }
    );

    // Parse the response
    const data = await response.json();

    // Return the token if needed
    return data!;
  } catch (error) {
    console.log(error);
    throw new Error("something error");
  }
};

export interface Order {
  ID: string;
  UserID: string;
  AddressID: string;
  TotalPrice: number;
  PaymentID: string;
  StatusID: string;
  Address: Address;
  Payment: Payment;
  OrderItem: OrderItem[];
  Status : Status;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
}
interface OrderItem {
  ID: string;
  VariantProductID: string;
  OrderID: string;
  Qty: number;
  Price: number;
  VariationOption: VariationOption;
}
interface VariationOption {
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
interface Payment {
  ID: string;
  PaymentTypeID: string;
  AccountNumber: string;
  ExpiryDate: string;
  StatusID: string;
  PaymentType: PaymentType;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
}
interface Status {
  ID: string;
  CategoryStatusID: string;
  Name: string;
  CategoryStatus: CategoryStatus;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
}
interface CategoryStatus {
  ID: string;
  Name: string;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
}
interface Address {
  ID: string;
  Name: string;
  CityID: string;
  PostalCode: string;
  UserID: string;
  City: City;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
}
interface City {
  id: string;
  city: string;
  deleted_at?: any;
}

export interface GetAllOrderResponse {
  header :HeaderResponse
  data : Order[]
} 

export const getAllOrder = async (
  token: string
): Promise<GetAllOrderResponse> => {
  try {
    // Request to the external login API
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        }
      }
    );

    // Parse the response
    const data = await response.json();

    // Return the token if needed
    return data!;
  } catch (error) {
    console.log(error);
    throw new Error("something error");
  }
};