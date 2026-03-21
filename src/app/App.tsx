import { BackgroundSystem } from "../systems/background/BackgroundSystem";
import { Navbar } from "../layout/Navbar";
import { Hero } from "../sections/hero/Hero";
import { Services } from "../sections/services/Services";
import { Skills } from "../sections/skills/Skills";
import { Projects } from "../sections/projects/Projects";
import { Contact } from "../sections/contact/Contact";

export default function App() {
  return (
    <div className="bg-[var(--color-page)] text-white font-sans relative overflow-x-hidden">
      <BackgroundSystem />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 sm:py-10 text-center text-neutral-500 border-t border-white/10 relative z-10 bg-black/30 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm">
              © {new Date().getFullYear()} Joel Dev. Soluciones web profesionales
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#services" className="text-xs sm:text-sm hover:text-white transition-colors">
                Servicios
              </a>
              <a href="#projects" className="text-xs sm:text-sm hover:text-white transition-colors">
                Proyectos
              </a>
              <a href="#contact" className="text-xs sm:text-sm hover:text-white transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
