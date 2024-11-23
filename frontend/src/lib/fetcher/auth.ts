// /lib/api.ts
interface LoginResponse {
  header: HeaderResponse;
  data: string;
}
export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    // Request to the external login API
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    // Parse the response
    const data: LoginResponse = await response.json();

    // Save token to localStorage or sessionStorage (You can choose one)
    localStorage.setItem("token", data.data); // You can use sessionStorage.setItem('token', token); if needed

    // Return the token if needed
    return data;
  } catch (error: any) {
    throw new Error(`Login failed: ${error.message}`);
  }
};

export interface RegisterRequest {
  full_name: string
  email_address: string
  phone_number: string
  password: string
}

export interface RegisterResponse {
  header: HeaderResponse;
  data: {
    user_id : string
  }
}


export const registerUser = async (
  request : RegisterRequest
): Promise<RegisterResponse> => {
  try {
    // Request to the external login API
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    // Parse the response
    const data: RegisterResponse = await response.json();

    // Return the token if needed
    return data;
  } catch (error: any) {
    throw new Error(`Login failed: ${error.message}`);
  }
};
