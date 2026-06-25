import { FiUser, FiMail, FiUsers } from "react-icons/fi";
import FeaturePage from "../../../components/ui/FeaturePage";
import { getUser } from "../../../lib/userStorage";

const FIELDS = [
  { key: "fullName", label: "Full Name", icon: FiUser },
  { key: "email", label: "Email", icon: FiMail },
  { key: "teamName", label: "Team Name", icon: FiUsers },
];

export default function Profile() {
  const user = getUser();

  return (
    <FeaturePage title="My Profile" subtitle="Your registered account details.">
      <div className="space-y-3">
        {FIELDS.map(({ key, label, icon: Icon }) => (
          <div
            key={key}
            className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
              <Icon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs text-subtle">{label}</p>
              <p className="text-sm font-medium text-heading">{user?.[key] || "—"}</p>
            </div>
          </div>
        ))}
      </div>
    </FeaturePage>
  );
}
