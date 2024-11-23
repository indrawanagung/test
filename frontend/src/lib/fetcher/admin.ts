export interface Product {
  ID: string;
  Name: string;
  ProductCategoryID: string;
  StatusID: string;
  Price: number;
  Image: string;
  ProductCategory: ProductCategory;
}

export interface ProductCategory {
  ID: string;
  CategoryName: string;
}

export interface GetAllProuductResponse {
    header : HeaderResponse,
    data : Product[]
}

export const getAllProduct = async (
  token: string
): Promise<GetAllProuductResponse> => {
  try {
    // Request to the external login API
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/products`,
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
