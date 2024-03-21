"use client";

import { useSidebarContext } from "@/context/sidebarContext";
import { tabDataI } from "@/data/data";
import { FC, useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

interface SidebarCardsProps {
  item: tabDataI;
  IamChildren?: boolean;
}

const SidebarCards: FC<SidebarCardsProps> = ({ item, IamChildren }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { setOpenSidebar, setCurrentTab, currentTab } = useSidebarContext();
  return (
    <div
      className={twMerge(
        "flex flex-col justify-start items-start w-full",
        IamChildren && "pl-3"
      )}
    >
      <div
        className={twMerge(
          "w-full py-1 flex justify-between items-center text-white pr-2 pl-3",
          currentTab === item ? "bg-blue-950" : "bg-blue-900"
        )}
      >
        <div
          onClick={() => {
            setCurrentTab(item);
          }}
          className="flex justify-start items-center gap-2 cursor-pointer font-medium"
        >
          {item?.icon && <item.icon className="w-4 h-4" />}
          <p>{item.name}</p>
        </div>
        {item.children && (
          <BiSolidRightArrow
            onClick={(e) => {
              setOpen((prev) => !prev);
            }}
            className={twMerge(
              "w-3 h-3 cursor-pointer transition-all",
              open ? "-rotate-90" : "rotate-90"
            )}
          />
        )}
      </div>
      {item.children &&
        open &&
        item.children.map((obj, i) => (
          <SidebarCards IamChildren key={i} item={obj} />
        ))}
    </div>
  );
};

export default SidebarCards;
