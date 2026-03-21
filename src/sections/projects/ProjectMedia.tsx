import { useEffect, useState } from "react";
import { Icon } from "../../shared/components/Icon";
import type { ProjectItem } from "../../shared/data/projects";

type ProjectMediaProps = {
  project: ProjectItem;
  className: string;
  iconClassName: string;
};

export function ProjectMedia({ project, className, iconClassName }: ProjectMediaProps) {
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [project.image]);

  const showImage = Boolean(project.image) && !imageFailed;

  return (
    <div className={className}>
      {showImage ? (
        <>
          <img
            src={project.image}
            alt={project.imageAlt ?? project.title}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
        </>
      ) : (
        <div className="text-white/30 group-hover:text-white/50 transition-colors duration-200">
          <Icon type={project.icon} className={iconClassName} />
        </div>
      )}
    </div>
  );
}
