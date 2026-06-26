import { createContext } from "react";

export const PwaInstallContext = createContext(null);

export function detectPlatform() {
  const ua = window.navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
  // iPadOS 13+ reports as "MacIntel" but, unlike a real Mac, exposes touch points.
  const isIPadOS = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  if (isIOS || isIPadOS) return "ios";
  if (/Android/.test(ua)) return "android";
  return "desktop";
}

export function detectStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}
