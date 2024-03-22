import { storyCardI } from "@/data/data";
import Image from "next/image";
import { FC } from "react";

interface StoryCardProps {
  data: storyCardI;
}

const StoryCard: FC<StoryCardProps> = ({ data }) => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-1 p-2 rounded-md bg-white shadow-md">
      <Image className="h-40" src={data.img} alt="Sunset Images" />
      <p className="font-semibold">{data.title}</p>
      <p className="text-sm">{data.description}</p>
    </div>
  );
};

export default StoryCard;
