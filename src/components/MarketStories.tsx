"use client";

import { useSidebarContext } from "@/context/sidebarContext";
import { storyCardI } from "@/data/data";
import { FC } from "react";
import { twMerge } from "tailwind-merge";
import StoryCard from "./StoryCard";

interface MarketStoriesProps {
  data: storyCardI[];
}

const MarketStories: FC<MarketStoriesProps> = ({ data }) => {
  const { currentTab } = useSidebarContext();
  return (
    <section
      className={twMerge(
        "flex-col w-full md:w-1/4 gap-5",
        currentTab.id !== 2 ? "hidden md:flex" : "flex"
      )}
    >
      <div className="bg-gray-300 p-1.5 hidden md:flex w-fit text-xl font-semibold text-pink-700">
        <p>MARKET STORIES</p>
      </div>
      {data.map((obj, idx) => (
        <StoryCard key={idx} data={obj} />
      ))}
    </section>
  );
};

export default MarketStories;
