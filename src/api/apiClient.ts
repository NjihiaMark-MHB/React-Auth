import axios from "axios";
import { useAuthStore } from "@/zustand-stores/auth";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  timeout: 5000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.setState({ isAuthenticated: false, currentUser: null });

      // Prevent redirect if already on login or signup pages
      const publicPaths = ["/", "/sign-up"];
      const currentPath = window.location.pathname;

      if (!publicPaths.includes(currentPath)) {
        window.location.href = "/";
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
