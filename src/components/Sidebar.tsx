import { FC } from "react";
import { BiSolidRightArrow, BiSolidBell } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { tabsData } from "@/data/data";

interface SidebarProps {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: FC<SidebarProps> = ({ openSidebar, setOpenSidebar }) => {
  return (
    <aside
      className={twMerge(
        "fixed left-0 top-0 bottom-0 w-[50vw] min-w-[260px] max-w-[360px] md:w-[360px] bg-blue-900 transition-all",
        !openSidebar && "min-w-0 w-0 md:w-0",
        "flex flex-col"
      )}
    >
      {openSidebar && (<>
        <div className="flex justify-between items-center p-4 text-white border-b border-white font-semibold">
          <div className="flex justify-start items-center gap-3">
            <FaUserCircle className="w-10 h-10" />
            <p>Hello, User</p>
          </div>
          <div className="relative">
            <div className="absolute bg-red-600 w-2 h-2 rounded-full right-1.5 top-1.5" />
            <BiSolidBell className="w-10 h-10" />
          </div>
        </div>
        <div className="flex flex-col overflow-y-auto gap-1 justify-start items-start py-3">
          {tabsData.map((item,idx)=>(
            <div key={idx} className="w-full px-3 py-1 bg-blue-950 flex justify-between items-center text-white">
              <div className="flex justify-start items-center gap-2 cursor-pointer font-medium">
                <item.icon className="w-4 h-4"/>
                <p>{item.name}</p>
              </div>
              {item.children&&<BiSolidRightArrow className="w-3 h-3 rotate-90 cursor-pointer"/>}
            </div>
          ))}
        </div>
      </>)}

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
