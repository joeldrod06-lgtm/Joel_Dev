import { motion } from "framer-motion";
import { Icon } from "../../shared/components/Icon";
import type { ServiceItem } from "../../shared/data/services";

type ServiceCardProps = {
  service: ServiceItem;
  index: number;
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 0.1,
            duration: 0.28,
            ease: "easeOut",
          },
        },
        hover: {
          y: -3,
          scale: 1.008,
          borderColor: "rgba(255, 255, 255, 0.2)",
          transition: {
            duration: 0.12,
            ease: "easeOut",
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover="hover"
      className="p-6 sm:p-8 rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10 transform-gpu will-change-transform"
    >
      <div className="text-white/80 mb-4">
        <Icon type={service.icon} className="w-10 h-10 sm:w-12 sm:h-12" />
      </div>
      <h3 className="text-xl sm:text-2xl font-semibold mb-3">{service.title}</h3>
      <p className="text-neutral-400 text-sm sm:text-base mb-4">{service.description}</p>
      <div className="flex flex-wrap gap-2">
        {service.features.map((feature) => (
          <span key={feature} className="text-xs text-neutral-400 bg-white/5 px-2 py-1 rounded-full">
            {feature}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
