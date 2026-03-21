import { useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { springConfig } from "../../systems/motion/motionConfig";

export function useMouseParallax() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set((event.clientX - window.innerWidth / 2) * 0.05);
      mouseY.set((event.clientY - window.innerHeight / 2) * 0.05);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return {
    smoothMouseX: useSpring(mouseX, springConfig),
    smoothMouseY: useSpring(mouseY, springConfig),
  };
}
