import { discussionCardI } from "@/data/data";
import Image from "next/image";
import { FC } from "react";
import { FaRegHeart, FaRegEye } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { LuShare2 } from "react-icons/lu";

interface DiscussionCardProps {
  data: discussionCardI;
}

const DiscussionCard: FC<DiscussionCardProps> = ({ data }) => {
  return (
    <div className="w-full bg-white rounded-lg flex justify-start px-3 py-2 gap-3 md:gap-5 relative shadow-xl">
      <p className="absolute right-3 top-[15px] md:right-5 text-blue-600 text-sm">
        {data.timeAgo}
      </p>
      <Image
        src={data.userImg}
        alt="user image"
        className="w-[10vw] h-[10vw] rounded-full max-w-10 max-h-10"
      />
      <div className="flex flex-col gap-2 justify-start items-start">
        <div className="flex gap-3 justify-start items-center text-lg font-semibold">
          <p>{data.userName}</p>
          <div className="bg-blue-900 flex justify-center items-center text-center px-3 py-1 rounded-full">
            <p className="text-white">{`Sector ${data.sector}`}</p>
          </div>
        </div>
        <div className="md:max-w-[80%]">
          <p>{data.description}</p>
        </div>
        <div className="flex justify-between items-center w-full md:w-[80%]">
          <div className="flex gap-0.5 md:gap-1.5 items-center font-semibold">
            <FaRegHeart size={18} />
            <p>{data.likes}</p>
          </div>
          <div className="flex gap-0.5 md:gap-1.5 items-center font-semibold">
            <FaRegEye size={18} />
            <p>{data.views}</p>
          </div>
          <div className="flex gap-0.5 md:gap-1.5 items-center font-semibold">
            <BiCommentDetail size={18} />
            <p>{data.comments}</p>
          </div>
          <div className="flex gap-0.5 md:gap-1.5 items-center font-semibold">
            <LuShare2 size={18} />
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionCard;
