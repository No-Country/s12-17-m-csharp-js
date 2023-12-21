import axios from "axios";
import { getSession } from "next-auth/react";

export const getToken = async () => {
  const session = await getSession();
  // @ts-ignore
  return session?.user?.token;
};

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

getToken().then((token) => {
  if (token) {
    apiClient.defaults.headers.Authorization = `Bearer ${token}`;
  }
});

export default apiClient;
