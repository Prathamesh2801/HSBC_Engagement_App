import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function RootLayout() {
  return (
    <div className="min-h-screen">
      <Toaster
        position="top-center"
        gutter={8}
        toastOptions={{
          duration: 3000,
          style: {
            background: "var(--color-surface)",
            color: "var(--color-text)",
            border: "1px solid var(--color-border)",
            borderRadius: "0.75rem",
            boxShadow: "0 10px 30px -12px rgba(44, 22, 15, 0.35)",
            fontSize: "0.875rem",
            padding: "0.625rem 0.875rem",
          },
          success: {
            iconTheme: {
              primary: "var(--color-success)",
              secondary: "var(--color-surface)",
            },
          },
          error: {
            iconTheme: {
              primary: "var(--color-error)",
              secondary: "var(--color-surface)",
            },
          },
          loading: {
            iconTheme: {
              primary: "var(--color-primary)",
              secondary: "var(--color-surface)",
            },
          },
        }}
      />
      <Outlet />
    </div>
  );
}
