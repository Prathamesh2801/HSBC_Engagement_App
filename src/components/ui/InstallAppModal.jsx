import { useState } from "react";
import {
  FiCheckCircle,
  FiDownload,
  FiShare,
  FiPlusSquare,
  FiMoreVertical,
  FiSmartphone,
} from "react-icons/fi";
import toast from "react-hot-toast";
import Modal from "./Modal";
import { usePwaInstall } from "../../lib/usePwaInstall";

const IOS_STEPS = [
  { icon: FiShare, text: "Tap the Share icon in Safari's toolbar." },
  { icon: FiPlusSquare, text: 'Scroll down and tap "Add to Home Screen".' },
  { icon: FiCheckCircle, text: 'Tap "Add" in the top-right corner to confirm.' },
];

const FALLBACK_STEPS = [
  { icon: FiMoreVertical, text: "Open your browser menu." },
  { icon: FiPlusSquare, text: 'Tap "Add to Home screen" or "Install app".' },
  { icon: FiCheckCircle, text: "Confirm to finish installing." },
];

function StepList({ steps }) {
  return (
    <ol className="mt-4 space-y-3">
      {steps.map(({ icon: Icon, text }, index) => (
        <li key={text} className="flex items-start gap-3">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
            <Icon className="h-4 w-4" />
          </span>
          <p className="pt-1.5 text-sm text-text">
            <span className="font-medium text-heading">{index + 1}. </span>
            {text}
          </p>
        </li>
      ))}
    </ol>
  );
}

export default function InstallAppModal({ open, onClose }) {
  const { platform, isInstalled, canPromptInstall, promptInstall } = usePwaInstall();
  const [isPrompting, setIsPrompting] = useState(false);

  const handleInstallClick = async () => {
    setIsPrompting(true);
    const outcome = await promptInstall();
    setIsPrompting(false);

    if (outcome === "accepted") {
      toast.success("App installed!");
      onClose();
    } else if (outcome === "unavailable") {
      toast.error("Install isn't available right now. Try your browser menu instead.");
    }
  };

  let body;
  if (isInstalled) {
    body = (
      <div className="flex flex-col items-center gap-3 py-2 text-center">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-success-soft text-success">
          <FiCheckCircle className="h-6 w-6" />
        </span>
        <p className="text-sm text-text">
          Banking Convention 2026 is already installed on this device. You're all set.
        </p>
      </div>
    );
  } else if (canPromptInstall) {
    body = (
      <>
        <p className="text-sm text-text">
          Install this app on your device for a faster, full-screen experience and quick access
          from your home screen.
        </p>
        <div className="mt-5 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-muted"
          >
            Not now
          </button>
          <button
            type="button"
            onClick={handleInstallClick}
            disabled={isPrompting}
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-on-primary transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70"
          >
            <FiDownload className="h-4 w-4" />
            Install
          </button>
        </div>
      </>
    );
  } else if (platform === "ios") {
    body = (
      <>
        <p className="text-sm text-text">
          Safari doesn't support one-tap install, but adding this app to your home screen only
          takes a few seconds:
        </p>
        <StepList steps={IOS_STEPS} />
        <div className="mt-5 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-on-primary transition-colors hover:bg-primary-hover"
          >
            Got it
          </button>
        </div>
      </>
    );
  } else {
    body = (
      <>
        <p className="text-sm text-text">
          Add this app to your home screen for a faster, full-screen experience:
        </p>
        <StepList steps={FALLBACK_STEPS} />
        <div className="mt-5 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-on-primary transition-colors hover:bg-primary-hover"
          >
            Got it
          </button>
        </div>
      </>
    );
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={
        isInstalled ? (
          "App Installed"
        ) : (
          <span className="flex items-center gap-2">
            <FiSmartphone className="h-4 w-4 text-primary" />
            Install App
          </span>
        )
      }
    >
      {body}
    </Modal>
  );
}
