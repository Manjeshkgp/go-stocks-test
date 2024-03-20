"use client";

import { FC, useState } from "react";
import Sidebar from "@/components/Sidebar";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  const [openSidebar,setOpenSidebar] = useState<boolean>(false);
  return (
    <>
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <main className="" >{children}</main>
    </>
  );
};

export default RootLayout;
