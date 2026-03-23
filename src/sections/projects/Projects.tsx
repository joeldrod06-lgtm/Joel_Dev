import { motion } from "framer-motion";
import { Container } from "../../layout/Container";
import { getSectionVariants } from "../../systems/motion/animations";
import { SectionTitle } from "../../shared/components/SectionTitle";
import { projects } from "../../shared/data/projects";
import { useIsMobile } from "../../shared/hooks/useIsMobile";
import { ProjectCard } from "./ProjectCard";
import { ProjectMedia } from "./ProjectMedia";

export function Projects() {
  const isMobile = useIsMobile();
  const bigProject = projects.find((project) => project.size === "big");
  const smallProjects = projects.filter((project) => project.size === "small");
  const projectHoverTransition = { type: "tween", ease: "easeOut", duration: 0.16 } as const;

  return (
    <motion.section
      id="projects"
      className="py-20 sm:py-32 scroll-mt-24 relative z-10"
      variants={getSectionVariants(isMobile)}
      initial={isMobile ? false : "hidden"}
      whileInView={isMobile ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Container>
        <SectionTitle
          title="Casos de Éxito"
          description="Soluciones reales que he desarrollado para clientes"
        />

        <div className="space-y-6 sm:space-y-8">
          {bigProject ? (
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 50 }}
              whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={isMobile ? undefined : { y: -8 }}
              whileTap={isMobile ? undefined : { y: -4 }}
              transition={isMobile ? undefined : { duration: 0.5, y: projectHoverTransition }}
              className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-0 sm:backdrop-blur-sm overflow-hidden group transform-gpu will-change-transform hover:border-white/20 hover:shadow-2xl transition-[border-color,box-shadow] duration-200"
            >
              <div className="flex flex-col md:flex-row">
                <ProjectMedia
                  project={bigProject}
                  className="h-48 md:h-auto md:w-2/5 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 relative overflow-hidden flex items-center justify-center"
                  iconClassName="w-20 h-20 sm:w-24 sm:h-24"
                />
                <div className="p-6 sm:p-8 md:w-3/5">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{bigProject.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-3 mb-4">
                    {bigProject.tech.split(", ").map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-neutral-400 bg-white/5 px-2 sm:px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-neutral-400 mt-3 text-sm sm:text-base leading-relaxed [text-align:justify]">
                    {bigProject.desc}
                  </p>
                  
                </div>
              </div>
            </motion.div>
          ) : null}

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {smallProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
