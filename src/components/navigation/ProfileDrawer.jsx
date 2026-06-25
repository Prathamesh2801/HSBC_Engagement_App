import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FiUser, FiSettings, FiLogOut, FiX } from "react-icons/fi";
import { getUser } from "../../lib/userStorage";
import Modal from "../ui/Modal";

export default function ProfileDrawer({ open, onClose }) {
  const navigate = useNavigate();
  const user = getUser();
  const [confirmOpen, setConfirmOpen] = useState(false);

  const confirmLogout = () => {
    setConfirmOpen(false);
    onClose();
    toast.success("Logged out successfully");
    navigate("/register");
  };

  return (
    <>
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
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-y-0 right-0 z-50 w-72 border-l border-border bg-surface-translucent p-5 backdrop-blur-md"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-heading">
                {user?.fullName || "Your account"}
              </h2>
              <button type="button" onClick={onClose} className="text-muted hover:text-heading">
                <FiX className="h-5 w-5" />
              </button>
            </div>

            <nav className="space-y-1.5">
              <NavLink
                to="/profile"
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary-soft text-primary"
                      : "text-text hover:bg-surface-muted"
                  }`
                }
              >
                <FiUser className="h-5 w-5" />
                My Profile
              </NavLink>

              <NavLink
                to="/settings"
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary-soft text-primary"
                      : "text-text hover:bg-surface-muted"
                  }`
                }
              >
                <FiSettings className="h-5 w-5" />
                Settings
              </NavLink>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  setConfirmOpen(true);
                }}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-error transition-colors hover:bg-error-soft"
              >
                <FiLogOut className="h-5 w-5" />
                Logout
              </button>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>

    <Modal open={confirmOpen} onClose={() => setConfirmOpen(false)} title="Log out?">
      <p className="text-sm text-text">
        You'll need to sign in again to access your account.
      </p>
      <div className="mt-5 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => setConfirmOpen(false)}
          className="rounded-lg px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-muted"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={confirmLogout}
          className="rounded-lg bg-error px-4 py-2 text-sm font-medium text-on-primary transition-colors hover:bg-error/90"
        >
          Logout
        </button>
      </div>
    </Modal>
    </>
  );
}
