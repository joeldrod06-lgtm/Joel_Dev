import { motion } from "framer-motion";
import { useRef } from "react";

type ParticleConfig = {
  x: number;
  y: number;
  duration: number;
  delay: number;
};

export function Particles() {
  const particles = useRef<ParticleConfig[]>(
    Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 5,
    })),
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.current.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute w-[2px] h-[2px] bg-white/20 rounded-full"
          initial={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            scale: 0,
          }}
          animate={{
            y: [`${particle.y}%`, `${particle.y}%`],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
