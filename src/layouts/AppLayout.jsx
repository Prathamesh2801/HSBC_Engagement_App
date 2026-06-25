import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "../components/navigation/TopBar";
import BottomNav from "../components/navigation/BottomNav";
import MoreSheet from "../components/navigation/MoreSheet";
import ProfileDrawer from "../components/navigation/ProfileDrawer";
import { moreNavItems } from "../components/navigation/navConfig";

export default function AppLayout() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { pathname } = useLocation();

  const moreActive = moreNavItems.some((item) => pathname.startsWith(item.to));

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar onProfileClick={() => setProfileOpen(true)} />

      <main className="flex-1 px-4 pb-24 pt-5">
        <Outlet />
      </main>

      <BottomNav onMoreClick={() => setMoreOpen(true)} moreActive={moreActive} />
      <MoreSheet open={moreOpen} onClose={() => setMoreOpen(false)} />
      <ProfileDrawer open={profileOpen} onClose={() => setProfileOpen(false)} />
    </div>
  );
}
