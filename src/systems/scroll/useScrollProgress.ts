import { useScroll, useTransform } from "framer-motion";

export function useScrollProgress() {
  const { scrollYProgress } = useScroll();

  return {
    scrollYProgress,
    navOpacity: useTransform(scrollYProgress, [0, 0.1], [0.4, 0.95]),
    gridOpacity: useTransform(scrollYProgress, [0, 0.5], [0.3, 0.15]),
    gradientOpacity: useTransform(scrollYProgress, [0, 0.3], [0.5, 0.2]),
  };
}
