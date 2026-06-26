import { useState } from "react";
import { FiHelpCircle, FiSend, FiLoader } from "react-icons/fi";
import toast from "react-hot-toast";
import FeaturePage from "../../../components/ui/FeaturePage";

const TOPICS = [
  "Games & how to play",
  "Leaderboard & points",
  "Itinerary & schedule",
  "Account & login",
  "Something else",
];

export default function HelpDesk() {
  const [form, setForm] = useState({ topic: TOPICS[0], message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.message.trim()) {
      toast.error("Please describe what you need help with.");
      return;
    }

    setIsSubmitting(true);

    // TODO: replace with the real help-desk API call once the backend is ready.
    setTimeout(() => {
      setIsSubmitting(false);
      setForm({ topic: TOPICS[0], message: "" });
      toast.success("Thanks! Our team will get back to you shortly.");
    }, 900);
  };

  return (
    <FeaturePage
      title="Help desk"
      subtitle="Tell us what you're stuck on and we'll help you out."
    >
      <div className="mb-6 flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
          <FiHelpCircle className="h-4 w-4" />
        </span>
        <p className="text-xs text-muted">
          Send us your question and we'll respond as soon as we can. The more
          detail you share, the faster we can help.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <label htmlFor="topic" className="block">
          <span className="mb-1.5 block text-sm font-medium text-heading">
            Topic
          </span>
          <select
            id="topic"
            name="topic"
            value={form.topic}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full rounded-lg border border-border-strong bg-surface px-3.5 py-2.5 text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-soft disabled:cursor-not-allowed disabled:opacity-60"
          >
            {TOPICS.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="message" className="block">
          <span className="mb-1.5 block text-sm font-medium text-heading">
            What are you confused about?
          </span>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="Describe your question or the issue you're facing..."
            className="w-full resize-none rounded-lg border border-border-strong bg-surface px-3.5 py-2.5 text-text placeholder:text-subtle transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-soft disabled:cursor-not-allowed disabled:opacity-60"
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-medium text-on-primary transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <FiLoader className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send message
              <FiSend className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </FeaturePage>
  );
}
