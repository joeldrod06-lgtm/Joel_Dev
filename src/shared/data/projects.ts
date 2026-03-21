export type ProjectItem = {
  title: string;
  desc: string;
  tech: string;
  size: "big" | "small";
  icon: "building" | "shopping" | "globe";
};

export const projects: ProjectItem[] = [
  {
    title: "Sistema de Gestión Empresarial",
    desc: "Solución completa para negocios locales: inventario, ventas, facturación y reportes. Panel administrativo intuitivo, dashboard en tiempo real y acceso multi-usuario. Ideal para pymes que quieren digitalizar sus operaciones.",
    tech: "React, Node.js, MongoDB, Tailwind",
    size: "big",
    icon: "building",
  },
  {
    title: "E-commerce Moderno",
    desc: "Tienda online completa con carrito de compras, pasarela de pagos integrada, gestión de productos y sistema de reseñas. Solución lista para que negocios locales vendan en línea.",
    tech: "React, Stripe, Node.js, MongoDB",
    size: "small",
    icon: "shopping",
  },
  {
    title: "Landing Page Corporativa",
    desc: "Sitios web profesionales con diseño moderno, optimizados para conversión y SEO. Perfecto para negocios que necesitan presencia digital impactante y funcional.",
    tech: "React, Tailwind, Framer Motion",
    size: "small",
    icon: "globe",
  },
];
