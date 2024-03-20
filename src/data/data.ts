import { BiMessageAltDetail, BiSolidDollarCircle } from "react-icons/bi";

export const tabsData = [
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
