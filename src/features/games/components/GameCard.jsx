import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiLock, FiArrowRight } from "react-icons/fi";

const MotionLink = motion(Link);

export default function GameCard({ game, index = 0 }) {
  const { name, image, href, to, comingSoon } = game;

  const motionProps = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut", delay: index * 0.08 },
  };

  const cardClassName =
    "flex flex-col items-center rounded-2xl border border-border bg-surface-translucent p-5 text-center shadow-xl backdrop-blur-md transition-colors";

  const content = (
    <>
      <div className="grid h-20 w-20 place-items-center rounded-xl bg-surface-muted">
        <img
          src={image}
          alt={name}
          className="h-20 w-20 object-contain mix-blend-multiply"
        />
      </div>
      <span className="mt-3 text-sm font-medium text-heading">{name}</span>
      {comingSoon ? (
        <span className="mt-1 flex items-center gap-1 text-xs font-medium text-subtle">
          <FiLock className="h-3.5 w-3.5" />
          Coming soon
        </span>
      ) : (
        <span className="mt-1 flex items-center gap-1 text-xs font-medium text-primary">
          Play now
          <FiArrowRight className="h-3.5 w-3.5" />
        </span>
      )}
    </>
  );

  // Internal game page (e.g. Reel).
  if (to) {
    return (
      <MotionLink
        to={to}
        {...motionProps}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
        className={`${cardClassName} hover:border-primary/40`}
      >
        {content}
      </MotionLink>
    );
  }

  // External game with a link provided — opens in a new tab.
  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        {...motionProps}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
        className={`${cardClassName} hover:border-primary/40`}
      >
        {content}
      </motion.a>
    );
  }

  // Coming soon, or link not yet provided.
  return (
    <motion.div {...motionProps} className={`${cardClassName} cursor-not-allowed opacity-70`}>
      {content}
    </motion.div>
  );
}
