import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FeaturePage from "../../../components/ui/FeaturePage";
import InstallAppModal from "../../../components/ui/InstallAppModal";
import { getUser } from "../../../lib/userStorage";
import { usePwaInstall } from "../../../lib/usePwaInstall";

export default function Home() {
  const user = getUser();
  const location = useLocation();
  const navigate = useNavigate();
  const { isInstalled } = usePwaInstall();
  // After registration we land here with `justRegistered` — open the install
  // prompt once on this first render (unless the app is already installed).
  const [installOpen, setInstallOpen] = useState(
    () => Boolean(location.state?.justRegistered) && !isInstalled,
  );

  // Clear the router flag so a refresh or back-navigation doesn't reopen it.
  useEffect(() => {
    if (location.state?.justRegistered) {
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, location.pathname, navigate]);

  return (
    <>
      <FeaturePage
        title={`Welcome, ${user?.fullName || "Guest"}`}
        subtitle="Your Activity at a glance."
      >
        <div className="rounded-xl border border-border bg-surface-muted px-4 py-5 text-center">
          <h2 className="font-cormorant text-2xl text-heading">
            The Royal Banking Quest
          </h2>
          <p className="mt-1.5 font-cinzel text-xs tracking-[0.2em] text-primary">
            JULY 06 TO AUG 02
          </p>
          <p className="mt-3 font-montserrat text-[11px] font-semibold tracking-wide text-muted">
            ONE VISION. ONE FORCE. LIMITLESS IMPACT.
          </p>
        </div>
      </FeaturePage>

      <InstallAppModal open={installOpen} onClose={() => setInstallOpen(false)} />
    </>
  );
}
