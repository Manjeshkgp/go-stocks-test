"use client"

import React, { FC } from "react";
import { discussionCardI, discussionsData } from "@/data/data";
import DiscussionCard from "@/components/DiscussionCard";
import { twMerge } from "tailwind-merge";
import { useSidebarContext } from "@/context/sidebarContext";

interface DiscussionForumProps {
  data: discussionCardI[];
}

const DiscussionForum: FC<DiscussionForumProps> = ({}) => {
  const {currentTab} = useSidebarContext()
  return (
    <section className={twMerge("w-full md:w-3/4 bg-white min-h-screen md:flex flex-col gap-5",currentTab.id!==1?"hidden":"flex")}>
      <div className="bg-gray-300 p-3 hidden md:flex w-fit text-3xl font-semibold text-pink-700">
        <p>DISCUSSION FORUM</p>
      </div>
      {discussionsData.map((obj, idx) => (
        <DiscussionCard data={obj} key={idx} />
      ))}
    </section>
  );
};

export default DiscussionForum;
