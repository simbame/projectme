"use client";

import Header from "@/app/components/Header";
import AppBar from "../../components/AppBar";
import React from "react";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "";
  const urlSegment = pathname.substring(pathname.lastIndexOf("/") + 1);
  const [loggedState, setLoggedState] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const loggedUser = window.localStorage.getItem("user");
    const isLogged = loggedUser ? JSON.parse(loggedUser).isLoggedIn : false;
    setLoggedState(isLogged);

    if (!isLogged) {
      // perform redirect as a side-effect, not during render
      window.location.href = "/login";
    }
  }, []);

  if (loggedState === null) {
    // still checking auth — avoid performing side-effects or rendering until resolved
    return null;
  }

  return (
    <>
      <Header />
      <AppBar tagName={urlSegment} />
      <main>{children}</main>
    </>
  );
}
