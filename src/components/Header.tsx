import { useSidebarContext } from "@/context/sidebarContext";
import { FC } from "react";
import { tabsData } from "@/data/data";
import { twMerge } from "tailwind-merge";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const { currentTab, setCurrentTab } = useSidebarContext();
  return (
    <header className="md:hidden z-[9] sticky top-0 flex justify-between gap-0 items-start bg-blue-900 text-white">
      {tabsData.map((obj,idx)=>(
        <div onClick={()=>{setCurrentTab(obj)}} className={twMerge("h-10 flex justify-center items-center w-full",currentTab===obj&&"bg-blue-950 border-b-2 border-pink-700")} key={idx}>
            <p>{obj.name}</p>
        </div>
      ))}
    </header>
  );
};

export default Header;
