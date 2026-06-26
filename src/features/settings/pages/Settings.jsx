import { useState } from "react";
import { FiDownload, FiBell, FiCheckCircle } from "react-icons/fi";
import toast from "react-hot-toast";
import FeaturePage from "../../../components/ui/FeaturePage";
import InstallAppModal from "../../../components/ui/InstallAppModal";
import Switch from "../../../components/ui/Switch";
import { usePwaInstall } from "../../../lib/usePwaInstall";

export default function Settings() {
  const { isInstalled } = usePwaInstall();
  const [installOpen, setInstallOpen] = useState(false);
  const [pushEnabled, setPushEnabled] = useState(false);

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
            className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
              isInstalled
                ? "border-success/30 bg-success-soft hover:bg-success-soft/80"
                : "border-border bg-surface hover:bg-surface-muted"
            }`}
          >
            <span
              className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${
                isInstalled ? "bg-success/15 text-success" : "bg-primary-soft text-primary"
              }`}
            >
              {isInstalled ? (
                <FiCheckCircle className="h-4 w-4" />
              ) : (
                <FiDownload className="h-4 w-4" />
              )}
            </span>
            <div>
              <p className="text-sm font-medium text-heading">
                {isInstalled ? "App Installed" : "Install App"}
              </p>
              <p className="text-xs text-subtle">
                {isInstalled
                  ? "You're using the installed app on this device."
                  : "Add this app to your home screen."}
              </p>
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

      <InstallAppModal open={installOpen} onClose={() => setInstallOpen(false)} />
    </>
  );
}
