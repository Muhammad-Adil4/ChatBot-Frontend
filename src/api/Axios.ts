import axios from "axios";
import type { LoginSchemaType } from "../schema/loginSchema";

const api = axios.create({
  baseURL: "/api", //
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (data: LoginSchemaType) => {
  const response = await api.post("/login", data);
  return response.data;
};
