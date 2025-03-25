import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import Logo from "@/assets/logo-1.svg?react";
import Home from "@/assets/home.svg?react";
import Movies from "@/assets/movies.svg?react";
import Tv from "@/assets/tv.svg?react";
import Bookmark from "@/assets/bookmark.svg?react";
import { LogOut } from "lucide-react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { useState } from "react";
import { useLogoutUser } from "@/hooks/react-query/logout-user";
import { useNavigate } from "@tanstack/react-router";
import { useAuthStore, useSetIsAuthenticated } from "@/zustand-stores/auth";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: () => {
    const isAuthenticated = useAuthStore.getState().isAuthenticated;
    if (!isAuthenticated) {
      throw redirect({
        to: "/",
        replace: true,
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const [open, setOpen] = useState(false);
  const { mutate: logout } = useLogoutUser();
  const navigate = useNavigate();
  const setIsAuthenticated = useSetIsAuthenticated();

  const handleLogout = () => {
    //setIsAuthenticated(false);
    logout(undefined, {
      onSuccess: () => {
        setIsAuthenticated(false);
        navigate({ to: "/" });
      },
    });
  };

  const links = [
    {
      label: "Home",
      href: "home",
      icon: (
        <Home className="group-hover:fill-red-500 group-[.sidenav]:fill-white" />
      ),
    },
    {
      label: "Movies",
      href: "movies",
      icon: (
        <Movies className="group-hover:fill-red-500 group-[.sidenav]:fill-white" />
      ),
    },
    {
      label: "Tv Series",
      href: "series",
      icon: (
        <Tv className="group-hover:fill-red-500 group-[.sidenav]:fill-white" />
      ),
    },
    {
      label: "Bookmarked",
      href: "bookmarked",
      icon: (
        <Bookmark className="group-hover:fill-red-500 group-[.sidenav]:fill-white" />
      ),
    },
    {
      label: "Logout",
      onClick: handleLogout,
      href: "#",
      icon: (
        <LogOut className="text-slate-500 h-5 w-5 flex-shrink-0 group-hover:text-red-500 group-[.sidenav]:text-white" />
      ),
    },
  ];
  return (
    <div className="flex h-screen">
      <div className="pt-8 pb-8 pl-8 pr-9">
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden items-center">
              <SidebarLink
                link={{
                  label: "",
                  href: "/",
                  icon: <Logo />,
                }}
              />
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <SidebarLink
                link={{
                  label: "Manu Arora",
                  href: "#",
                  icon: (
                    <img
                      src="https://assets.aceternity.com/manu.png"
                      className="h-7 w-7 flex-shrink-0 rounded-full"
                      width={50}
                      height={50}
                      alt="Avatar"
                    />
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>
      </div>
      <Outlet />
    </div>
  );
}
