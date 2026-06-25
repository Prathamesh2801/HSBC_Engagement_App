import { motion } from "framer-motion";

export default function FeaturePage({ title, subtitle, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mx-auto max-w-md"
    >
      <div className="rounded-2xl border border-border bg-surface-translucent p-6 shadow-xl backdrop-blur-md my-4">
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-xl font-semibold text-heading">{title}</h1>
            {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
          </div>
        </div>

        {children && <div className="mt-6">{children}</div>}
      </div>
    </motion.div>
  );
}
