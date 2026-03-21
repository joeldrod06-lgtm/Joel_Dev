import { motion, type MotionValue } from "framer-motion";

type GradientBlobsProps = {
  smoothMouseX: MotionValue<number>;
  smoothMouseY: MotionValue<number>;
  opacity: MotionValue<number>;
};

export function GradientBlobs({
  smoothMouseX,
  smoothMouseY,
  opacity,
}: GradientBlobsProps) {
  return (
    <motion.div
      style={{
        x: smoothMouseX,
        y: smoothMouseY,
        opacity,
      }}
      className="fixed inset-0 pointer-events-none"
    >
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-amber-500/16 via-orange-500/8 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-l from-cyan-500/16 via-emerald-500/8 to-transparent rounded-full blur-3xl" />
    </motion.div>
  );
}
