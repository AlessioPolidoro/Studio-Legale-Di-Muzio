import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import Divider from "../components/Divider";

const ease = [0.25, 0.46, 0.45, 0.94];

function revealUp(delay = 0) {
  return {
    initial:    { opacity: 0, y: 24 },
    whileInView:{ opacity: 1, y: 0 },
    viewport:   { once: true, margin: "-60px" },
    transition: { duration: 0.65, ease, delay },
  };
}

export default function Contatti() {
  return (
    <>
      {/* Intestazione */}
      <section className="py-24 md:py-28 px-6 bg-bg">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="font-sans text-xs tracking-[0.22em] uppercase text-brass mb-5"
          >
            Contatti
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.08 }}
            className="font-display font-semibold text-ink leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Scrivimi
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="w-16 h-px bg-brass my-8"
            aria-hidden="true"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.22 }}
            className="font-sans text-taupe text-lg max-w-xl leading-relaxed"
          >
            Per fissare una prima consulenza o chiedere informazioni, compila
            il modulo o contatta direttamente lo studio.
          </motion.p>
        </div>
      </section>

      <Divider />

      {/* Form + info affiancati */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

          {/* Form — primo su mobile, col-span-2 su desktop */}
          <motion.div {...revealUp()} className="md:col-span-2 md:order-first">
            <ContactForm />
          </motion.div>

          {/* Info contatti — dopo il form su mobile, colonna laterale su desktop */}
          <motion.aside {...revealUp(0.1)} aria-label="Informazioni di contatto">
            <div className="space-y-8">
              <div>
                <p className="font-sans text-xs font-medium tracking-[0.18em] uppercase text-brass mb-2">
                  Telefono
                </p>
                <p className="font-sans text-sm text-taupe">
                  <a href="tel:+390000000000" className="hover:text-bordeaux transition-colors">
                    [DA INSERIRE]
                  </a>
                </p>
              </div>
              <div>
                <p className="font-sans text-xs font-medium tracking-[0.18em] uppercase text-brass mb-2">
                  Email
                </p>
                <p className="font-sans text-sm text-taupe">
                  <a href="mailto:studio@esempio.it" className="hover:text-bordeaux transition-colors">
                    [DA INSERIRE]
                  </a>
                </p>
              </div>
              <div>
                <p className="font-sans text-xs font-medium tracking-[0.18em] uppercase text-brass mb-2">
                  PEC
                </p>
                <p className="font-sans text-sm text-taupe break-all">
                  [DA INSERIRE]
                </p>
              </div>
              <div>
                <p className="font-sans text-xs font-medium tracking-[0.18em] uppercase text-brass mb-2">
                  Indirizzo
                </p>
                <address className="not-italic font-sans text-sm text-taupe leading-relaxed">
                  Via degli Agostiniani 46<br />
                  66100 Chieti (CH)
                </address>
              </div>
              <div>
                <p className="font-sans text-xs font-medium tracking-[0.18em] uppercase text-brass mb-2">
                  Orari
                </p>
                <p className="font-sans text-sm text-taupe leading-relaxed">
                  Lun &ndash; Ven: 9:00 &ndash; 18:00<br />
                  <span className="text-xs text-stone italic">
                    Appuntamenti su richiesta anche fuori orario.
                  </span>
                </p>
              </div>

              <div className="pt-4 border-t border-stone/30">
                <p className="font-sans text-xs text-stone leading-relaxed">
                  Per le prime richieste, indica brevemente la natura della
                  questione: aiuta a valutare disponibilità e urgenza.
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </>
  );
}
