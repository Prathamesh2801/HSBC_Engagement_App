import { FiHome, FiRss, FiAward, FiCalendar } from "react-icons/fi";
import { TbDeviceGamepad2 } from "react-icons/tb";

export const primaryNavItems = [
  { to: "/home", label: "Home", icon: FiHome },
  { to: "/feed", label: "Feed", icon: FiRss },
];

export const moreNavItems = [
  { to: "/games", label: "Games", icon: TbDeviceGamepad2 },
  { to: "/leaderboard", label: "Leaderboard", icon: FiAward },
  { to: "/itinerary", label: "Itinerary", icon: FiCalendar },
];
