import { FiBell } from "react-icons/fi";
import FeaturePage from "../../../components/ui/FeaturePage";

export default function Notifications() {
  return (
    <FeaturePage icon={FiBell} title="Notifications" subtitle="Stay up to date.">
      <p className="text-sm text-text">
        Alerts and announcements will appear here.
      </p>
    </FeaturePage>
  );
}
