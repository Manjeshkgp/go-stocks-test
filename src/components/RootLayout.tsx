"use client";

import { FC } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { twMerge } from "tailwind-merge";
import { useSidebarContext } from "@/context/sidebarContext";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  const { openSidebar } = useSidebarContext();
  return (
    <>
      <Sidebar />
      <Header />
      <main
        className={twMerge(
          "min-h-screen md:relative md:right-0 transition-all",
          openSidebar && "lg:w-[calc(100%-360px)] lg:left-[360px]"
        )}
      >
        {children}
      </main>
    </>
  );
};

export default RootLayout;
