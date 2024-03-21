"use client";

import { FC, useEffect, useRef } from "react";
import { BiSolidRightArrow, BiSolidBell } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { tabsData } from "@/data/data";
import { useSidebarContext } from "@/context/sidebarContext";
import SidebarCards from "./SidebarCards";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const { openSidebar, setOpenSidebar, currentTab, setCurrentTab } =
    useSidebarContext();
  return (
    <aside
      className={twMerge(
        "fixed z-10 left-0 top-0 bottom-0 w-[50vw] min-w-[260px] max-w-[360px] md:w-[360px] bg-blue-900 transition-all",
        !openSidebar && "min-w-0 w-0 md:w-0",
        "flex flex-col"
      )}
    >
      <>
        {/* topbar and menus */}
        <div
          className={twMerge(
            "flex justify-between items-center p-4 text-white border-b border-white font-semibold",
            !openSidebar && "opacity-0"
          )}
        >
          <div className="flex justify-start items-center gap-3">
            <FaUserCircle className="w-10 h-10" />
            <p>Hello, User</p>
          </div>
          <div className="relative">
            <div className="absolute bg-red-600 w-2 h-2 rounded-full right-1.5 top-1.5" />
            <BiSolidBell className="w-10 h-10" />
          </div>
        </div>
        <div
          className={twMerge(
            "flex flex-col overflow-y-auto gap-1 justify-start items-start py-3",
            !openSidebar && "opacity-0"
          )}
        >
          {tabsData.map((item, idx) => (
            <SidebarCards item={item} key={idx} />
          ))}
        </div>
      </>

      <div
        className={twMerge(
          "w-4 transition-all absolute -right-4 top-0 bottom-0 flex items-center justify-center",
          openSidebar && "bg-gray-300"
        )}
      >
        <button
          onClick={() => setOpenSidebar((prev) => !prev)}
          className="w-4 h-32 bg-blue-900 flex justify-center items-center"
        >
          <BiSolidRightArrow
            className={twMerge(
              "w-4 h-4 text-white",
              openSidebar && "rotate-180"
            )}
          />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
