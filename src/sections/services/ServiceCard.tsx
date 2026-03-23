import { motion } from "framer-motion";
import { Icon } from "../../shared/components/Icon";
import type { ServiceItem } from "../../shared/data/services";
import { useIsMobile } from "../../shared/hooks/useIsMobile";

type ServiceCardProps = {
  service: ServiceItem;
  index: number;
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const isMobile = useIsMobile();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: isMobile ? Math.min(index * 0.03, 0.09) : index * 0.1,
            duration: isMobile ? 0.22 : 0.28,
            ease: "easeOut",
          },
        },
        hover: {
          y: isMobile ? -1 : -3,
          scale: isMobile ? 1.002 : 1.008,
          borderColor: "rgba(255, 255, 255, 0.2)",
          transition: {
            duration: isMobile ? 0.08 : 0.12,
            ease: "easeOut",
          },
        },
      }}
      initial={isMobile ? false : "hidden"}
      whileInView={isMobile ? undefined : "visible"}
      viewport={{ once: true }}
      whileHover={isMobile ? undefined : "hover"}
      className="p-6 sm:p-8 rounded-2xl bg-black/50 backdrop-blur-0 sm:backdrop-blur-sm border border-white/10 transform-gpu will-change-transform"
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
