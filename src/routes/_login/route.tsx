import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import Logo from "@/assets/logo-1.svg?react";
import { useAuthStore } from "@/zustand-stores/auth";

export const Route = createFileRoute("/_login")({
  beforeLoad: () => {
    const isAuthenticated = useAuthStore.getState().isAuthenticated;
    if (isAuthenticated) {
      throw redirect({ to: "/home" });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mt-6 lg:max-w-5xl lg:mt-[78.1px] p-6 m-auto">
      <div className="flex justify-center w-full">
        <Logo />
      </div>
      <Outlet />
    </div>
  );
}
