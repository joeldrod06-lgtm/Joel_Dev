export type ServiceItem = {
  title: string;
  description: string;
  icon: "code" | "settings" | "cart";
  features: string[];
};

export const services: ServiceItem[] = [
  {
    title: "Páginas Web Profesionales",
    description:
      "Sitios web modernos, rápidos y responsive que generan confianza y convierten visitantes en clientes.",
    icon: "code",
    features: ["Diseño responsive", "Optimización SEO", "Alta velocidad"],
  },
  {
    title: "Sistemas a Medida",
    description:
      "Soluciones tecnológicas personalizadas para optimizar procesos internos de tu negocio.",
    icon: "settings",
    features: ["Automatización", "Paneles de control", "Reportes avanzados"],
  },
  {
    title: "E-commerce",
    description:
      "Tiendas online completas con gestión de productos, pagos integrados y dashboard administrativo.",
    icon: "cart",
    features: ["Carrito de compras", "Múltiples pasarelas", "Gestión de inventario"],
  },
];
