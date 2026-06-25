import { FiCalendar } from "react-icons/fi";
import FeaturePage from "../../../components/ui/FeaturePage";

export default function Itinerary() {
  return (
    <FeaturePage icon={FiCalendar} title="Itinerary" subtitle="What's on the schedule.">
      <p className="text-sm text-text">
        Sessions, timings, and venues will be listed here.
      </p>
    </FeaturePage>
  );
}
