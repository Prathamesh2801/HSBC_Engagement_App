import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { moreNavItems } from "./navConfig";

export default function MoreSheet({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-heading/40"
          />
          <motion.div
            key="sheet"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-0 bottom-0 z-50 rounded-t-2xl border border-border bg-surface-translucent p-5 pb-8 backdrop-blur-md"
          >
            <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-border-strong" />
            <h2 className="mb-4 text-sm font-semibold text-heading">More options</h2>

            <div className="space-y-1.5">
              {moreNavItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary-soft text-primary"
                        : "text-text hover:bg-surface-muted"
                    }`
                  }
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
