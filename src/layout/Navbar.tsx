import { motion, useTransform } from "framer-motion";
import { Container } from "./Container";
import { smoothScrollTo } from "../systems/scroll/smoothScroll";
import { useScrollProgress } from "../systems/scroll/useScrollProgress";
import { Button } from "../shared/components/Button";

const navItems = [
  { href: "#services", label: "Servicios" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export function Navbar() {
  const { navOpacity } = useScrollProgress();
  const backgroundColor = useTransform(navOpacity, (value) => `rgba(0, 0, 0, ${value})`);

  const handleBrandClick = () => {
    const hero = document.querySelector("#hero");
    if (!hero) {
      return;
    }

    smoothScrollTo(hero as HTMLElement);
    history.pushState(null, "", "#hero");
  };

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-0 w-full backdrop-blur-xl border-b border-white/10 z-50"
    >
      <Container className="py-3 sm:py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent cursor-pointer"
          onClick={handleBrandClick}
        >
          Joel Dev
        </motion.h1>

        <div className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-neutral-300 hover:text-white transition-all duration-300 relative group hover:tracking-wide"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <Button href="#contact" className="hidden sm:inline-flex">
          Contactar
        </Button>
      </Container>
    </motion.nav>
  );
}
