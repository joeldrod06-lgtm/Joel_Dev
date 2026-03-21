import { motion } from "framer-motion";
import { GradientBlobs } from "./GradientBlobs";
import { Particles } from "./Particles";
import { useScrollProgress } from "../scroll/useScrollProgress";
import { useMouseParallax } from "../../shared/hooks/useMouseParallax";

export function BackgroundSystem() {
  const { gridOpacity, gradientOpacity } = useScrollProgress();
  const { smoothMouseX, smoothMouseY } = useMouseParallax();

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-[var(--color-page)] via-[var(--color-page)] to-[#111111]" />

      <motion.div style={{ opacity: gridOpacity }} className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </motion.div>

      <GradientBlobs
        smoothMouseX={smoothMouseX}
        smoothMouseY={smoothMouseY}
        opacity={gradientOpacity}
      />
      <Particles />

      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      <div className="fixed inset-x-0 top-0 h-32 pointer-events-none bg-gradient-to-b from-[var(--color-page)] to-transparent z-40" />
      <div className="fixed inset-x-0 bottom-0 h-32 pointer-events-none bg-gradient-to-t from-[var(--color-page)] to-transparent z-40" />
    </>
  );
}
