export type ProjectItem = {
  title: string;
  desc: string;
  tech: string;
  size: "big" | "small";
  icon: "building" | "shopping" | "globe";
  image?: string;
  imageAlt?: string;
};

export const projects: ProjectItem[] = [
  {
    title: "Sistema Integral Vv2",
    desc: "Sistema web tipo ERP desarrollado para la UPQ, enfocado en centralizar y optimizar la gestión de procesos administrativos y académicos mediante módulos interconectados. Permite administrar usuarios, servicios, pagos y reportes en tiempo real a través de una interfaz moderna, rápida y responsive, con una arquitectura escalable basada en APIs orientada a la automatización y eficiencia operativa.",
    tech: "React, Node.js, Ajax, Tailwind, Postgress, Springboot",
    size: "big",
    icon: "building",
    image: "/projects/sistema-gestion.jpg",
    imageAlt: "Vista previa del sistema de gestion empresarial",
  },
  {
    title: "INFRAMEX - Plataforma Web con Panel Administrativo",
    desc: "Pagina web para empresa de materiales de construccion donde los usuarios pueden consultar productos, informacion de la empresa y contactar facilmente via WhatsApp o llamada. Incluye panel administrativo para gestionar productos, descripciones, imagenes y contenido del sitio en tiempo real.",
    tech: "Next.js, Node.js, Postgress, Tailwind",
    size: "small",
    icon: "building",
    image: "/projects/inframex.png",
    imageAlt: "Vista previa de la plataforma web de INFRAMEX",
  },
  {
    title: "Landing Page - Gimnasio",
    desc: "Pagina web informativa para gimnasio donde los usuarios pueden consultar planes, precios, servicios e informacion general. Incluye seccion de contacto para facilitar la comunicacion y captar nuevos clientes.",
    tech: "React, Tailwind, Next.js, Material UI",
    size: "small",
    icon: "globe",
    image: "/projects/gym.png",
    imageAlt: "Vista previa de landing page de gimnasio",
  },
];
