import { motion } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={isMobile ? false : { opacity: 0, y: 30 }}
      whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={isMobile ? undefined : { duration: 0.4, ease: "easeOut" }}
      className="text-center mb-12 sm:mb-16"
    >
      {eyebrow ? (
        <span className="text-xs sm:text-sm uppercase tracking-wider text-neutral-400">{eyebrow}</span>
      ) : null}
      <h2 className="text-3xl sm:text-4xl font-semibold mt-2">{title}</h2>
      {description ? (
        <p className="text-neutral-400 mt-3 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
