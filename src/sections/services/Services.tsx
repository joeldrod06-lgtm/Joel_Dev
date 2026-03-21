import { motion } from "framer-motion";
import { Container } from "../../layout/Container";
import { sectionVariants } from "../../systems/motion/animations";
import { SectionTitle } from "../../shared/components/SectionTitle";
import { services } from "../../shared/data/services";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <motion.section
      id="services"
      className="py-20 sm:py-32 scroll-mt-24 relative z-10"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Container>
        <SectionTitle
          eyebrow="Qué ofrezco"
          title="Soluciones que transforman negocios"
          description="Tecnología moderna adaptada a las necesidades reales de tu negocio"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </Container>
    </motion.section>
  );
}
