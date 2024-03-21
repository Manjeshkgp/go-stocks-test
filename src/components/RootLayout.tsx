"use client";

import { FC } from "react";
import Sidebar from "@/components/Sidebar";
import { SidebarProvider } from "@/context/sidebarContext";
import Header from "@/components/Header";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <SidebarProvider>
        <Sidebar />
        <Header/>
        <main className="">{children}</main>
      </SidebarProvider>
    </>
  );
};

export default RootLayout;
