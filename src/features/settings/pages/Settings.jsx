import { useState } from "react";
import { FiDownload, FiBell } from "react-icons/fi";
import toast from "react-hot-toast";
import FeaturePage from "../../../components/ui/FeaturePage";
import Modal from "../../../components/ui/Modal";
import Switch from "../../../components/ui/Switch";

export default function Settings() {
  const [installOpen, setInstallOpen] = useState(false);
  const [pushEnabled, setPushEnabled] = useState(false);

  const handleInstall = () => {
    setInstallOpen(false);
    toast.success("App installed!");
  };

  const handleTogglePush = (next) => {
    setPushEnabled(next);
    toast.success(next ? "Push notifications enabled" : "Push notifications disabled");
  };

  return (
    <>
      <FeaturePage title="Settings" subtitle="Manage your account preferences.">
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => setInstallOpen(true)}
            className="flex w-full items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-left transition-colors hover:bg-surface-muted"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
              <FiDownload className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-medium text-heading">Install App</p>
              <p className="text-xs text-subtle">Add this app to your home screen.</p>
            </div>
          </button>

          <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
              <FiBell className="h-4 w-4" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-medium text-heading">Push Notifications</p>
              <p className="text-xs text-subtle">Get notified about updates and announcements.</p>
            </div>
            <Switch checked={pushEnabled} onChange={handleTogglePush} label="Push notifications" />
          </div>
        </div>
      </FeaturePage>

      <Modal open={installOpen} onClose={() => setInstallOpen(false)} title="Install App">
        <p className="text-sm text-text">
          Install this app on your device for a faster, full-screen experience and quick access
          from your home screen.
        </p>
        <div className="mt-5 flex justify-end gap-2">
          <button
            type="button"
            onClick={() => setInstallOpen(false)}
            className="rounded-lg px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-muted"
          >
            Not now
          </button>
          <button
            type="button"
            onClick={handleInstall}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-on-primary transition-colors hover:bg-primary-hover"
          >
            Install
          </button>
        </div>
      </Modal>
    </>
  );
}
