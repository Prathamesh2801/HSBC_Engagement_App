export default function TextField({ id, label, icon: Icon, type = "text", className = "", ...props }) {
  return (
    <label htmlFor={id} className={`block ${className}`}>
      <span className="mb-1.5 block text-sm font-medium text-heading">{label}</span>
      <span className="relative flex items-center">
        {Icon && (
          <Icon className="pointer-events-none absolute left-3.5 h-4 w-4 text-subtle" />
        )}
        <input
          id={id}
          type={type}
          className={`w-full rounded-lg border border-border-strong bg-surface py-2.5 text-text placeholder:text-subtle transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-soft disabled:cursor-not-allowed disabled:opacity-60 ${
            Icon ? "pl-10 pr-3.5" : "px-3.5"
          }`}
          {...props}
        />
      </span>
    </label>
  );
}
