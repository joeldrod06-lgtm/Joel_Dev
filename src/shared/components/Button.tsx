import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function Button({ href, children, className = "" }: ButtonProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition-all ${className}`.trim()}
    >
      {children}
    </motion.a>
  );
}
