import { motion } from "framer-motion";
import { Icon } from "../../shared/components/Icon";
import type { ProjectItem } from "../../shared/data/projects";

type ProjectCardProps = {
  project: ProjectItem;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden group hover:border-white/20 transition-all"
    >
      <div className="h-40 sm:h-48 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 relative overflow-hidden flex items-center justify-center">
        <div className="text-white/30 group-hover:text-white/50 transition-all">
          <Icon type={project.icon} className="w-12 h-12 sm:w-16 sm:h-16" />
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-medium">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mt-2 mb-3">
          {project.tech.split(", ").map((tech) => (
            <span key={tech} className="text-xs text-neutral-400 bg-white/5 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-neutral-400 mt-2 text-xs sm:text-sm leading-relaxed">{project.desc}</p>
        <motion.a
          href="#"
          whileHover={{ x: 5 }}
          className="inline-block mt-4 text-sm text-white/70 hover:text-white transition-colors"
        >
          Ver proyecto →
        </motion.a>
      </div>
    </motion.div>
  );
}
