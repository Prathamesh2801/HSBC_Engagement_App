import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiUsers,
  FiArrowRight,
  FiLoader,
} from "react-icons/fi";
import toast from "react-hot-toast";
import TextField from "../../../components/ui/TextField";
import logo from "../../../assets/images/logo.png";
import { saveUser } from "../../../lib/userStorage";

const FIELDS = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    icon: FiUser,
    placeholder: "Jane Doe",
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    icon: FiMail,
    placeholder: "jane@company.com",
    autoComplete: "email",
  },
  {
    name: "teamName",
    label: "Team Name",
    type: "text",
    icon: FiUsers,
    placeholder: "Growth Squad",
    autoComplete: "organization",
  },
];

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: "", email: "", teamName: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: replace with the real registration API call once the backend is ready
    setTimeout(() => {
      saveUser(form);
      toast.success(
        `Welcome aboard, ${form.fullName.split(" ")[0] || "there"}!`,
      );
      // Land on Home and let it surface the install prompt there.
      navigate("/home", { state: { justRegistered: true } });
    }, 900);
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md rounded-2xl border border-border bg-surface-translucent p-8 shadow-xl backdrop-blur-md"
      >
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Banking Convention 2026"
            className="h-20 w-20 object-contain mix-blend-multiply sm:h-24 sm:w-24"
          />
        </div>

        <h1 className="mt-5 text-center text-2xl font-semibold text-heading">
          Register yourself
        </h1>
        <p className="mt-1.5 text-center text-sm text-muted">
          Join the engagement program and start your journey.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {FIELDS.map((field) => (
            <TextField
              key={field.name}
              id={field.name}
              name={field.name}
              label={field.label}
              type={field.type}
              icon={field.icon}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              value={form[field.name]}
              onChange={handleChange}
              disabled={isSubmitting}
              required
            />
          ))}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-medium text-on-primary transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <FiLoader className="h-4 w-4 animate-spin" />
                Registering...
              </>
            ) : (
              <>
                Register
                <FiArrowRight className="h-4 w-4" />
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
