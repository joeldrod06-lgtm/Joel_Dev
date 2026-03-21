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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="p-6 sm:p-8 rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
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
