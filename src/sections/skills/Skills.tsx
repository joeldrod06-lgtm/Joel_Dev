import { motion } from "framer-motion";
import { Container } from "../../layout/Container";
import { getSectionVariants } from "../../systems/motion/animations";
import { SectionTitle } from "../../shared/components/SectionTitle";
import { skills } from "../../shared/data/skills";
import { useIsMobile } from "../../shared/hooks/useIsMobile";

export function Skills() {
  const isMobile = useIsMobile();

  return (
    <motion.section
      id="skills"
      className="py-20 sm:py-32 scroll-mt-24 bg-black/30 backdrop-blur-0 sm:backdrop-blur-sm relative z-10"
      variants={getSectionVariants(isMobile)}
      initial={isMobile ? false : "hidden"}
      whileInView={isMobile ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Container>
        <SectionTitle
          eyebrow="Tecnologías"
          title="Mi Stack Tecnológico"
          description="Herramientas modernas para soluciones profesionales"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: isMobile ? Math.min(index * 0.02, 0.08) : index * 0.05,
                    duration: isMobile ? 0.2 : 0.28,
                    ease: "easeOut",
                  },
                },
                hover: {
                  y: isMobile ? -1 : -3,
                  scale: isMobile ? 1.002 : 1.008,
                  borderColor: "rgba(255, 255, 255, 0.22)",
                  transition: {
                    duration: isMobile ? 0.08 : 0.12,
                    ease: "easeOut",
                  },
                },
                tap: {
                  scale: isMobile ? 0.999 : 0.997,
                  transition: {
                    duration: 0.08,
                    ease: "easeOut",
                  },
                },
              }}
              initial={isMobile ? false : "hidden"}
              whileInView={isMobile ? undefined : "visible"}
              viewport={{ once: true }}
              whileHover={isMobile ? undefined : "hover"}
              whileTap={isMobile ? undefined : "tap"}
              className="p-4 sm:p-6 rounded-2xl bg-black/50 backdrop-blur-0 sm:backdrop-blur-sm border border-white/10 text-center transform-gpu will-change-transform"
            >
              <span className="text-base sm:text-lg font-medium block">{skill.name}</span>
              <span className="text-xs text-neutral-500 mt-2 block">{skill.level}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
}
