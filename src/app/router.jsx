import { createHashRouter, Navigate } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import AppLayout from "../layouts/AppLayout";
import { authRoutes } from "../features/auth/routes";
import { homeRoutes } from "../features/home/routes";
import { feedRoutes } from "../features/feed/routes";
import { gamesRoutes } from "../features/games/routes";
import { leaderboardRoutes } from "../features/leaderboard/routes";
import { itineraryRoutes } from "../features/itinerary/routes";
import { settingsRoutes } from "../features/settings/routes";
import { notificationsRoutes } from "../features/notifications/routes";
import { profileRoutes } from "../features/profile/routes";
import { helpdeskRoutes } from "../features/helpdesk/routes";
import { travelAdvisoryRoutes } from "../features/travel-advisory/routes";
import { dosAndDontsRoutes } from "../features/dos-and-donts/routes";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/register" replace /> },
      ...authRoutes,
      {
        element: <AppLayout />,
        children: [
          ...homeRoutes,
          ...feedRoutes,
          ...gamesRoutes,
          ...leaderboardRoutes,
          ...itineraryRoutes,
          ...settingsRoutes,
          ...notificationsRoutes,
          ...profileRoutes,
          ...helpdeskRoutes,
          ...travelAdvisoryRoutes,
          ...dosAndDontsRoutes,
        ],
      },
    ],
  },
]);

export default router;
