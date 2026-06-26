import { NavLink } from "react-router-dom";
import { FiBell, FiUser, FiHelpCircle } from "react-icons/fi";
import logo from "../../assets/images/logo.png";

export default function TopBar({ onProfileClick, hasUnreadNotifications = true }) {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-surface-translucent px-4 py-3 backdrop-blur-md">
      <img
        src={logo}
        alt="Banking Convention 2026"
        className="h-10 w-10 object-contain mix-blend-multiply"
      />

      <div className="flex items-center gap-2">
        <NavLink
          to="/help"
          aria-label="Help desk"
          className={({ isActive }) =>
            `grid h-9 w-9 place-items-center rounded-full transition-colors ${
              isActive ? "bg-info/15 text-info" : "bg-info-soft text-info hover:bg-info/15"
            }`
          }
        >
          <FiHelpCircle className="h-5 w-5" />
        </NavLink>

        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            `relative grid h-9 w-9 place-items-center rounded-full transition-colors ${
              isActive ? "bg-primary-soft text-primary" : "text-muted hover:bg-surface-muted"
            }`
          }
        >
          <FiBell className="h-5 w-5" />
          {hasUnreadNotifications && (
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary ring-2 ring-surface" />
          )}
        </NavLink>

        <button
          type="button"
          onClick={onProfileClick}
          className="grid h-9 w-9 place-items-center rounded-full bg-accent-soft text-accent transition-colors hover:bg-accent/15"
        >
          <FiUser className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
