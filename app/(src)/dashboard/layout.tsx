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
  const pathname = usePathname();
  const urlSegment = pathname.substring(pathname.lastIndexOf("/") + 1);
  return (
    <>
      <Header />
      <AppBar tagName={urlSegment} />
      <main>{children}</main>
    </>
  );
}
