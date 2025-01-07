import { RegisterRequest, RegisterResponse } from "../auth";
import { LoginResponse } from "../types";

export class UserAPI {
  static LoginUser = async (
    email: string,
    password: string
  ): Promise<LoginResponse> => {
    try {
      // Request to the external login API
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      // Parse the response
      const data: LoginResponse = await response.json();

      // Save token to localStorage or sessionStorage (You can choose one)
      localStorage.setItem("token", data.data); // You can use sessionStorage.setItem('token', token); if needed

      // Return the token if needed
      return data;
    } catch (error: any) {
      return {
        header: {
          message: error,
          error: true,
        },
        data: "",
      };
    }
  };

  static RegisterUser = async (
    request: RegisterRequest
  ): Promise<RegisterResponse> => {
    try {
      // Request to the external login API
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(request),
        }
      );

      // Parse the response
      const data: RegisterResponse = await response.json();

      // Return the token if needed
      return data;
    } catch (error: any) {
      return {
        header: {
          message: error,
          error: true,
        },
        data: null!,
      };
    }
  };
}
