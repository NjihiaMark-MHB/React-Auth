import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface AuthStore {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        isAuthenticated: false,
        setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
      }),
      {
        name: "auth-storage",
      }
    )
  )
);

export const useIsAuthenticated = () =>
  useAuthStore((state) => state.isAuthenticated);

export const useSetIsAuthenticated = () =>
  useAuthStore((state) => state.setIsAuthenticated);
