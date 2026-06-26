import { RouterProvider } from "react-router-dom";
import router from "./app/router";
import { PwaInstallProvider } from "./lib/PwaInstallProvider";

export default function App() {
  return (
    <PwaInstallProvider>
      <RouterProvider router={router} />
    </PwaInstallProvider>
  );
}
