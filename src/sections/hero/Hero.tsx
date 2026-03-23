import { motion } from "framer-motion";
import { getHeroTransition } from "../../systems/motion/animations";
import { useIsMobile } from "../../shared/hooks/useIsMobile";

export function Hero() {
  const isMobile = useIsMobile();

  return (
    <section
      id="hero"
      className="min-h-screen scroll-mt-24 flex items-center justify-center text-center px-4 sm:px-6 relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: isMobile ? 24 : 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={getHeroTransition(isMobile)}
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
          Desarrollo páginas web profesionales, sistemas de gestión y tiendas online que ayudan a
          negocios locales a crecer. Tecnología moderna, resultados tangibles.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center px-4">
          <a
            href="#services"
            className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-white text-black font-medium shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
          >
            Conocer servicios
          </a>
          <a
            href="#contact"
            className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-transparent border border-white/30 text-white font-medium hover:bg-white/10 transition-all text-sm sm:text-base"
          >
            Solicitar presupuesto
          </a>
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
  );
}
