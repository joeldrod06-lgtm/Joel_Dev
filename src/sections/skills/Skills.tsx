import { motion } from "framer-motion";
import { Container } from "../../layout/Container";
import { sectionVariants } from "../../systems/motion/animations";
import { SectionTitle } from "../../shared/components/SectionTitle";
import { skills } from "../../shared/data/skills";

export function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20 sm:py-32 scroll-mt-24 bg-black/30 backdrop-blur-sm relative z-10"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-4 sm:p-6 rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10 text-center hover:border-white/30 transition-all"
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
