import axios from "axios";
import {
  CreateProductResponse,
  GetAllProductVariationResponse,
} from "../types";

export class ProductAPI {
  static getProductVariations = async (
    searchName?: string | null
  ): Promise<GetAllProductVariationResponse> => {
    // Request to the external login API
    let url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?name=${searchName}`;
    if (!searchName) {
      url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`;
    }
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Parse the response
    const data = await response.json();

    // Return the token if needed
    return data;
  };
  static createProduct = async (
    formData: FormData,
    token: string
  ): Promise<CreateProductResponse> => {
    // Request to the external login API
    const response = await axios.post(
     `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/products`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  };
}
