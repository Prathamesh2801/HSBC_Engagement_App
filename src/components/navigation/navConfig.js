import {
  FiHome,
  FiAward,
  FiCalendar,
  FiAlertTriangle,
  FiCheckSquare,
} from "react-icons/fi";
import { TbDeviceGamepad2 } from "react-icons/tb";

export const primaryNavItems = [
  { to: "/home", label: "Home", icon: FiHome },
  { to: "/games", label: "Games", icon: TbDeviceGamepad2 },
];

export const moreNavItems = [
  { to: "/leaderboard", label: "Leaderboard", icon: FiAward },
  { to: "/itinerary", label: "Itinerary", icon: FiCalendar },
  { to: "/travel-advisory", label: "Travel Advisory", icon: FiAlertTriangle },
  { to: "/dos-and-donts", label: "Do's and Don'ts", icon: FiCheckSquare },
];
