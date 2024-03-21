import { IconType } from "react-icons";
import { BiMessageAltDetail, BiSolidDollarCircle } from "react-icons/bi";
import { StaticImageData } from "next/image";
import profileImg from "@/assets/sample_user.png";

export interface tabDataI {
  name: string;
  icon?: IconType;
  children?: tabDataI[];
  id:number
}

export interface discussionCardI {
  userImg: StaticImageData;
  userName: string;
  sector: number;
  description: string;
  timeAgo: string;
  likes: string;
  comments: string;
  views: string;
}

interface storyCardI {
  img: StaticImageData;
  title: string;
  description: string;
}

export const tabsData: tabDataI[] = [
  { name: "Discussion Forum", icon: BiMessageAltDetail, id:1 },
  {
    name: "Market Stories",
    icon: BiSolidDollarCircle,
    id:2,
    children: [
      { name: "Sentiment", id:2.1 },
      { name: "Market", id:2.2 },
      { name: "Sector", id:2.3 },
      { name: "Watchlist", id:2.4 },
      { name: "Events", id:2.5 },
      { name: "News/Interview", id:2.6 },
    ],
  },
];

export const discussionsData:discussionCardI[] = [
  {
    userImg:profileImg,
    userName:"Lorem Ipsum",
    sector:1,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    timeAgo:"2 min ago",
    likes:"2k",
    comments:"2k Comments",
    views:"2k"
  },
  {
    userImg:profileImg,
    userName:"Lorem Ipsum",
    sector:2,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    timeAgo:"12 min ago",
    likes:"1.1k",
    comments:"1.2k Comments",
    views:"6k"
  },
  {
    userImg:profileImg,
    userName:"Lorem Ipsum",
    sector:2,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    timeAgo:"20 min ago",
    likes:"523",
    comments:"121 Comments",
    views:"5k"
  },
  {
    userImg:profileImg,
    userName:"Lorem Ipsum",
    sector:1,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    timeAgo:"6 min ago",
    likes:"1.2k",
    comments:"1k Comments",
    views:"6k"
  },
]