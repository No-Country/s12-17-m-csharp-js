// @ts-nocheck
import axios from "axios";
import { getSession } from "next-auth/react";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYWlsIjoibGVhbkBtYWlsLmNvbSIsImlkIjoiNzhhMzFjNGYtOTJkNi00OTRmLWE4MWYtMGNlMGY2NmIzMjllIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoidXN1YXJpbyIsImV4cCI6MTcwMjYxODM0OH0.7mlrRTCnCBIJz8om-rSNDIkKYKm3kcwzd-KzmdmZRUQ",
  },
});

export default apiClient;
