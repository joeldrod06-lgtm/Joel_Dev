import { motion } from "framer-motion";
import { Container } from "../../layout/Container";
import { sectionVariants } from "../../systems/motion/animations";
import { Icon } from "../../shared/components/Icon";

export function Contact() {
  const whatsappMessage =
    "Hola Joel, encontré tu sitio web y me interesaron tus servicios. Me gustaría recibir más información.";
  const whatsappHref = `https://wa.me/524481519373?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.section
      id="contact"
      className="py-20 sm:py-32 scroll-mt-24 bg-black/30 backdrop-blur-sm relative z-10"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold">¿Transformamos tu negocio?</h2>
          <p className="text-neutral-400 mt-4 text-base sm:text-lg">
            Hablemos sobre cómo puedo ayudarte a digitalizar tu negocio o conseguir ese trabajo
            que estás buscando.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-white text-black font-medium shadow-none hover:shadow-xl transition-all text-sm sm:text-base"
            >
              <Icon type="whatsapp" className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href="mailto:joeldrod06@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-transparent border border-white/30 text-white font-medium hover:bg-white/10 transition-all text-sm sm:text-base"
            >
              <Icon type="mail" className="w-4 h-4" />
              <span>joeldrod06@gmail.com</span>
            </a>
          </div>

          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-xs text-neutral-500 uppercase mb-2">WhatsApp</p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-300 hover:text-white text-sm transition"
              >
                4481519373
              </a>
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
      </Container>
    </motion.section>
  );
}
