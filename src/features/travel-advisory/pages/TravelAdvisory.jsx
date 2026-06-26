import { FiAlertTriangle } from "react-icons/fi";
import FeaturePage from "../../../components/ui/FeaturePage";

export default function TravelAdvisory() {
  return (
    <FeaturePage
      icon={FiAlertTriangle}
      title="Travel Advisory"
      subtitle="Important travel guidance and safety updates."
    >
      <p className="text-sm text-text">
        Travel advisories, local guidelines, and safety information will be
        listed here.
      </p>
    </FeaturePage>
  );
}
