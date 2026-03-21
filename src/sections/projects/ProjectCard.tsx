import { motion } from "framer-motion";
import type { ProjectItem } from "../../shared/data/projects";
import { ProjectMedia } from "./ProjectMedia";

const projectHoverTransition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.16,
} as const;

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
      transition={{ delay: index * 0.1, duration: 0.5, y: projectHoverTransition }}
      whileHover={{ y: -8 }}
      whileTap={{ y: -4 }}
      className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden group transform-gpu will-change-transform hover:border-white/20 hover:shadow-2xl transition-[border-color,box-shadow] duration-200"
    >
      <ProjectMedia
        project={project}
        className="h-40 sm:h-48 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 relative overflow-hidden flex items-center justify-center"
        iconClassName="w-12 h-12 sm:w-16 sm:h-16"
      />
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-medium">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mt-2 mb-3">
          {project.tech.split(", ").map((tech) => (
            <span key={tech} className="text-xs text-neutral-400 bg-white/5 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-neutral-400 mt-2 text-xs sm:text-sm leading-relaxed [text-align:justify]">
          {project.desc}
        </p>
       
      </div>
    </motion.div>
  );
}
