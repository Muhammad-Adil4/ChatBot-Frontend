import axios from "axios";
import type { LoginSchemaType } from "../schema/loginSchema";
const URL = 'http://localhost:5000'
const api = axios.create({
  baseURL: `${URL}/api/auth`,
  withCredentials: true
});
export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: {
      id: string;
      name: string;
      email: string;
      token: string;
    };
    token: string;
  };
}

export const loginUser = async (data: LoginSchemaType):Promise<AuthResponse> => {
  const response = await api.post("/login", data);
  return response.data;
};
export const signUp = async (data: LoginSchemaType):Promise<AuthResponse> => {
  const response = await api.post("/signup", data);
  return response.data;
};
