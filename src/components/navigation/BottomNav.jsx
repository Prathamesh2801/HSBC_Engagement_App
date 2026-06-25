import { NavLink } from "react-router-dom";
import { FiMoreHorizontal } from "react-icons/fi";
import { primaryNavItems } from "./navConfig";

export default function BottomNav({ onMoreClick, moreActive }) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface-translucent backdrop-blur-md">
      <div className="mx-auto flex max-w-md items-stretch justify-around px-2 py-2">
        {primaryNavItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-1 flex-col items-center gap-1 rounded-xl py-1.5 text-xs font-medium transition-colors ${
                isActive ? "text-primary" : "text-muted hover:text-heading"
              }`
            }
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </NavLink>
        ))}

        <button
          type="button"
          onClick={onMoreClick}
          className={`flex flex-1 flex-col items-center gap-1 rounded-xl py-1.5 text-xs font-medium transition-colors ${
            moreActive ? "text-primary" : "text-muted hover:text-heading"
          }`}
        >
          <FiMoreHorizontal className="h-5 w-5" />
          <span>More</span>
        </button>
      </div>
    </nav>
  );
}
