import { FiCheckSquare } from "react-icons/fi";
import FeaturePage from "../../../components/ui/FeaturePage";

export default function DosAndDonts() {
  return (
    <FeaturePage
      icon={FiCheckSquare}
      title="Do's and Don'ts"
      subtitle="Etiquette and ground rules for the event."
    >
      <p className="text-sm text-text">
        The list of recommended do's and things to avoid will be listed here.
      </p>
    </FeaturePage>
  );
}
