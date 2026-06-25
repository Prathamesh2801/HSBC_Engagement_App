import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function RootLayout() {
  return (
    <div className="min-h-screen">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "var(--color-surface)",
            color: "var(--color-text)",
            border: "1px solid var(--color-border)",
          },
        }}
      />
      <Outlet />
    </div>
  );
}
