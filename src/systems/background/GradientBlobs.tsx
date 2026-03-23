import { motion, type MotionValue } from "framer-motion";

type GradientBlobsProps = {
  smoothMouseX?: MotionValue<number>;
  smoothMouseY?: MotionValue<number>;
  opacity: MotionValue<number>;
  isMobile?: boolean;
};

export function GradientBlobs({
  smoothMouseX,
  smoothMouseY,
  opacity,
  isMobile = false,
}: GradientBlobsProps) {
  return (
    <motion.div
      style={{
        x: isMobile ? 0 : smoothMouseX,
        y: isMobile ? 0 : smoothMouseY,
        opacity,
      }}
      className="fixed inset-0 pointer-events-none"
    >
      <div
        className={`absolute top-1/4 -left-1/4 rounded-full bg-gradient-to-r from-amber-500/16 via-orange-500/8 to-transparent ${
          isMobile ? "h-[420px] w-[420px] blur-[90px]" : "h-[800px] w-[800px] blur-3xl"
        }`}
      />
      <div
        className={`absolute bottom-1/4 -right-1/4 rounded-full bg-gradient-to-l from-cyan-500/16 via-emerald-500/8 to-transparent ${
          isMobile ? "h-[420px] w-[420px] blur-[90px]" : "h-[800px] w-[800px] blur-3xl"
        }`}
      />
    </motion.div>
  );
}
