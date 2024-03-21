import { IconType } from "react-icons";
import { BiMessageAltDetail, BiSolidDollarCircle } from "react-icons/bi";

export interface tabDataI {
  name: string;
  icon?: IconType;
  children?: tabDataI[];
}

export const tabsData:tabDataI[] = [
  { name: "Discussion Forum", icon: BiMessageAltDetail },
  {
    name: "Market Stories",
    icon: BiSolidDollarCircle,
    children: [
      { name: "Sentiment" },
      { name: "Market" },
      { name: "Sector" },
      { name: "Watchlist" },
      { name: "Events" },
      { name: "News/Interview" },
    ],
  },
];
