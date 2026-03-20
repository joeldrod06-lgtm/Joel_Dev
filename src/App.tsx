import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useMemo } from "react";

// ========== CONSTANTES FUERA DEL COMPONENTE ==========
const ICONS = {
  building: (
    <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  shopping: (
    <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  globe: (
    <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  code: (
    <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  settings: (
    <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  cart: (
    <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  mail: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  ),
  star: (
    <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  )
};

// ========== FUNCIONES UTILITARIAS ==========
const easeInOutCubic = (t: number) => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

const smoothScrollTo = (element: HTMLElement, duration: number = 800) => {
  const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = offsetTop - startPosition;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easeProgress = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * easeProgress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

// ========== DATOS ESTÁTICOS ==========
const projects = [
  {
    title: "Sistema de Gestión Empresarial",
    desc: "Solución completa para negocios locales: inventario, ventas, facturación y reportes. Panel administrativo intuitivo, dashboard en tiempo real y acceso multi-usuario. Ideal para pymes que quieren digitalizar sus operaciones.",
    tech: "React, Node.js, MongoDB, Tailwind",
    size: "big",
    icon: "building"
  },
  {
    title: "E-commerce Moderno",
    desc: "Tienda online completa con carrito de compras, pasarela de pagos integrada, gestión de productos y sistema de reseñas. Solución lista para que negocios locales vendan en línea.",
    tech: "React, Stripe, Node.js, MongoDB",
    size: "small",
    icon: "shopping"
  },
  {
    title: "Landing Page Corporativa",
    desc: "Sitios web profesionales con diseño moderno, optimizados para conversión y SEO. Perfecto para negocios que necesitan presencia digital impactante y funcional.",
    tech: "React, Tailwind, Framer Motion",
    size: "small",
    icon: "globe"
  }
];

const services = [
  {
    title: "Páginas Web Profesionales",
    description: "Sitios web modernos, rápidos y responsive que generan confianza y convierten visitantes en clientes.",
    icon: "code",
    features: ["Diseño responsive", "Optimización SEO", "Alta velocidad"]
  },
  {
    title: "Sistemas a Medida",
    description: "Soluciones tecnológicas personalizadas para optimizar procesos internos de tu negocio.",
    icon: "settings",
    features: ["Automatización", "Paneles de control", "Reportes avanzados"]
  },
  {
    title: "E-commerce",
    description: "Tiendas online completas con gestión de productos, pagos integrados y dashboard administrativo.",
    icon: "cart",
    features: ["Carrito de compras", "Múltiples pasarelas", "Gestión de inventario"]
  }
];

const skills = [
  { name: "React", level: "Avanzado" },
  { name: "JavaScript", level: "Avanzado" },
  { name: "TailwindCSS", level: "Avanzado" },
  { name: "Node.js", level: "Intermedio" },
  { name: "TypeScript", level: "Intermedio" },
  { name: "Git/GitHub", level: "Avanzado" },
  { name: "MongoDB", level: "Intermedio" },
  { name: "Figma", level: "Intermedio" }
];

// ========== COMPONENTE PRINCIPAL ==========
export default function App() {
  const { scrollYProgress } = useScroll();
  const navOpacity = useTransform(scrollYProgress, [0, 0.1], [0.4, 0.95]);
  
  // Sistema de fondo premium
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // ✅ PROBLEMA #1 CORREGIDO: Mouse tracking actualizado
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Efecto parallax suave basado en posición del mouse
      mouseX.set((e.clientX - window.innerWidth / 2) * 0.05);
      mouseY.set((e.clientY - window.innerHeight / 2) * 0.05);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);
  
  // Efecto de profundidad suave con spring physics
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  // Transformaciones para efecto parallax
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.15]);
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 0.2]);
  
  // ✅ PROBLEMA #2 CORREGIDO: Partículas estables con useRef
  const particles = useRef(
    Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 5,
    }))
  );
  
  // ✅ PROBLEMA #3 CORREGIDO: Smooth scroll solo para links internos
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;
      
      const hash = anchor.getAttribute('href');
      // Solo interceptar links internos que empiezan con #
      if (!hash || !hash.startsWith('#')) return;
      
      // Verificar que es un link interno del mismo dominio
      if (anchor.target === '_blank') return;
      
      e.preventDefault();
      const element = document.querySelector(hash);
      if (!element) return;
      
      smoothScrollTo(element as HTMLElement);
      history.pushState(null, null, hash);
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const bigProject = projects.find(p => p.size === "big");
  const smallProjects = projects.filter(p => p.size === "small");

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.45, 0.27, 0.9]
      }
    }
  };

  // Componente Icon optimizado
  const Icon = ({ type, className = "w-8 h-8 sm:w-10 sm:h-10" }: { type: string; className?: string }) => {
    // ✅ PROBLEMA #4 CORREGIDO: Usar ICONS constante y clonar con className
    const iconElement = ICONS[type as keyof typeof ICONS];
    if (!iconElement) return null;
    
    // Clonar el elemento para aplicar className personalizado
    return (
      <svg
        {...iconElement.props}
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox={iconElement.props.viewBox}
      >
        {iconElement.props.children}
      </svg>
    );
  };

  return (
    <div ref={containerRef} className="bg-[#0a0a0a] text-white font-sans scroll-smooth relative overflow-x-hidden">
      
      {/* ========== SISTEMA DE FONDO PREMIUM ========== */}
      
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a] to-[#111111]" />
      
      <motion.div 
        style={{ opacity: gridOpacity }}
        className="fixed inset-0 pointer-events-none"
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
      </motion.div>
      
      <motion.div
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
          opacity: gradientOpacity,
        }}
        className="fixed inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-l from-cyan-500/20 via-emerald-500/10 to-transparent rounded-full blur-3xl" />
      </motion.div>
      
      {/* ✅ PROBLEMA #2 CORREGIDO: Partículas estables */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.current.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/20 rounded-full"
            initial={{
              x: `${p.x}%`,
              y: `${p.y}%`,
              scale: 0,
            }}
            animate={{
              y: [`${p.y}%`, `${p.y}%`],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              repeatType: "reverse",
              delay: p.delay,
            }}
          />
        ))}
      </div>
      
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      <div className="fixed inset-x-0 top-0 h-32 pointer-events-none bg-gradient-to-b from-[#0a0a0a] to-transparent z-40" />
      <div className="fixed inset-x-0 bottom-0 h-32 pointer-events-none bg-gradient-to-t from-[#0a0a0a] to-transparent z-40" />
      
      {/* ========== CONTENIDO PRINCIPAL ========== */}
      
      {/* NAVBAR */}
      <motion.nav 
        style={{ backgroundColor: useTransform(navOpacity, val => `rgba(0, 0, 0, ${val})`) }}
        className="fixed top-0 w-full backdrop-blur-xl border-b border-white/10 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent cursor-pointer"
            onClick={() => {
              const hero = document.querySelector('#hero');
              if (hero) {
                smoothScrollTo(hero as HTMLElement);
                history.pushState(null, null, '#hero');
              }
            }}
          >
            Joel Dev
          </motion.h1>

          <div className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-medium">
            <a href="#services" className="text-neutral-300 hover:text-white transition-all duration-300 relative group hover:tracking-wide">
              Servicios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#skills" className="text-neutral-300 hover:text-white transition-all duration-300 relative group hover:-translate-y-[1px]">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#projects" className="text-neutral-300 hover:text-white transition-all duration-300 relative group hover:tracking-wide">
              Proyectos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-neutral-300 hover:text-white transition-all duration-300 relative group hover:-translate-y-[1px]">
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition-all"
          >
            Contactar
          </motion.a>
        </div>
      </motion.nav>

      {/* HERO */}
      <section id="hero" className="min-h-screen flex items-center justify-center text-center px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.45, 0.27, 0.9] }}
          className="relative w-full"
        >
      
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight px-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Soluciones Web
            </span>
            <span className="text-3xl sm:text-4xl md:text-5xl block mt-3 text-neutral-300">
              para tu negocio
            </span>
          </h1>

          <p className="mt-6 text-neutral-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            Desarrollo páginas web profesionales, sistemas de gestión y tiendas online 
            que ayudan a negocios locales a crecer. Tecnología moderna, resultados tangibles.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center px-4">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-white text-black font-medium shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
            >
              Conocer servicios
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-transparent border border-white/30 text-white font-medium hover:bg-white/10 transition-all text-sm sm:text-base"
            >
              Solicitar presupuesto
            </motion.a>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto px-4">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">+10</p>
              <p className="text-xs sm:text-sm text-neutral-500">Proyectos entregados</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">100%</p>
              <p className="text-xs sm:text-sm text-neutral-500">Satisfacción cliente</p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <p className="text-2xl sm:text-3xl font-bold text-white">24/7</p>
              <p className="text-xs sm:text-sm text-neutral-500">Soporte técnico</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <motion.section 
        id="services" 
        className="py-20 sm:py-32 px-4 sm:px-6 relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-xs sm:text-sm uppercase tracking-wider text-neutral-400">Qué ofrezco</span>
            <h2 className="text-3xl sm:text-4xl font-semibold mt-2">Soluciones que transforman negocios</h2>
            <p className="text-neutral-400 mt-3 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              Tecnología moderna adaptada a las necesidades reales de tu negocio
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
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
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="text-xs text-neutral-400 bg-white/5 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section 
        id="skills" 
        className="py-20 sm:py-32 bg-black/30 backdrop-blur-sm px-4 sm:px-6 relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-xs sm:text-sm uppercase tracking-wider text-neutral-400">Tecnologías</span>
            <h2 className="text-3xl sm:text-4xl font-semibold mt-2">Mi Stack Tecnológico</h2>
            <p className="text-neutral-400 mt-3 sm:mt-4 text-sm sm:text-base">Herramientas modernas para soluciones profesionales</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-4 sm:p-6 rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10 text-center hover:border-white/30 transition-all"
              >
                <span className="text-base sm:text-lg font-medium block">{skill.name}</span>
                <span className="text-xs text-neutral-500 mt-2 block">{skill.level}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section 
        id="projects" 
        className="py-20 sm:py-32 px-4 sm:px-6 relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold">Casos de Éxito</h2>
            <p className="text-neutral-400 mt-3 sm:mt-4 text-sm sm:text-base">Soluciones reales que he desarrollado para clientes</p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {bigProject && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden group hover:border-white/20 transition-all hover:shadow-2xl"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="h-48 md:h-auto md:w-2/5 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 relative overflow-hidden flex items-center justify-center">
                    <div className="text-white/30 group-hover:text-white/50 transition-all">
                      <Icon type={bigProject.icon} className="w-20 h-20 sm:w-24 sm:h-24" />
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 md:w-3/5">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{bigProject.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-3 mb-4">
                      {bigProject.tech.split(', ').map(tech => (
                        <span key={tech} className="text-xs text-neutral-400 bg-white/5 px-2 sm:px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-neutral-400 mt-3 text-sm sm:text-base leading-relaxed">
                      {bigProject.desc}
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
                      <motion.a
                        href="#"
                        whileHover={{ x: 5 }}
                        className="inline-block text-sm text-white/70 hover:text-white transition-colors"
                      >
                        Ver demo →
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ x: 5 }}
                        className="inline-block text-sm text-white/70 hover:text-white transition-colors"
                      >
                        Solicitar similar →
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {smallProjects.map((project, index) => (
                <motion.div
                  key={index}
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
                      {project.tech.split(', ').map(tech => (
                        <span key={tech} className="text-xs text-neutral-400 bg-white/5 px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-neutral-400 mt-2 text-xs sm:text-sm leading-relaxed">
                      {project.desc}
                    </p>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="inline-block mt-4 text-sm text-white/70 hover:text-white transition-colors"
                    >
                      Ver proyecto →
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section 
        id="contact" 
        className="py-20 sm:py-32 bg-black/30 backdrop-blur-sm px-4 sm:px-6 relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center px-4"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold">¿Transformamos tu negocio?</h2>
          <p className="text-neutral-400 mt-4 text-base sm:text-lg">
            Hablemos sobre cómo puedo ayudarte a digitalizar tu negocio o conseguir ese trabajo que estás buscando.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:joel@dev.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-white text-black font-medium shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
            >
              <Icon type="mail" className="w-4 h-4" />
              <span>joel@dev.com</span>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-transparent border border-white/30 text-white font-medium hover:bg-white/10 transition-all text-sm sm:text-base"
            >
              <Icon type="linkedin" className="w-4 h-4" />
              <span>LinkedIn</span>
            </motion.a>
          </div>

          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-xs text-neutral-500 uppercase mb-2">GitHub</p>
              <a href="#" className="text-neutral-300 hover:text-white text-sm transition">github.com/joeldev</a>
            </div>
            <div>
              <p className="text-xs text-neutral-500 uppercase mb-2">Disponibilidad</p>
              <p className="text-neutral-300 text-sm">Freelance / Tiempo completo</p>
            </div>
            <div>
              <p className="text-xs text-neutral-500 uppercase mb-2">Respuesta</p>
              <p className="text-neutral-300 text-sm">Menos de 24h</p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* FOOTER */}
      <footer className="py-8 sm:py-10 text-center text-neutral-500 border-t border-white/10 relative z-10 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm">© {new Date().getFullYear()} Joel Dev. Soluciones web profesionales</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#services" className="text-xs sm:text-sm hover:text-white transition-colors">Servicios</a>
              <a href="#projects" className="text-xs sm:text-sm hover:text-white transition-colors">Proyectos</a>
              <a href="#contact" className="text-xs sm:text-sm hover:text-white transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}