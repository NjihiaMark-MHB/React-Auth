import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface AuthStore {
  isAuthenticated: boolean;
  actions: { setIsAuthenticated: (value: boolean) => void };
}

const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        isAuthenticated: false,
        actions: {
          setIsAuthenticated: (value: boolean) =>
            set({ isAuthenticated: value }),
        },
      }),
      {
        name: "auth-storage",
      }
    )
  )
);

export const useIsAuthenticated = () =>
  useAuthStore((state) => state.isAuthenticated);

// 🎉 one selector for all our actions
export const useAuthActions = () => useAuthStore((state) => state.actions);
