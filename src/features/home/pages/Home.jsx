import FeaturePage from "../../../components/ui/FeaturePage";
import { getUser } from "../../../lib/userStorage";

export default function Home() {
  const user = getUser();

  return (
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
  );
}
