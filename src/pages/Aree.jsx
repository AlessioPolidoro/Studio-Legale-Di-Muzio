import { motion } from "framer-motion";
import AreaCard from "../components/AreaCard";
import Button from "../components/Button";
import Divider from "../components/Divider";
import { aree } from "../data/aree";

const ease = [0.25, 0.46, 0.45, 0.94];

export default function Aree() {
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
            Competenze
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.08 }}
            className="font-display font-semibold text-ink leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Aree di competenza
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
            className="font-sans text-taupe text-lg max-w-2xl leading-relaxed"
          >
            La pratica è dedicata esclusivamente al diritto civile. Di seguito le
            aree in cui lo studio offre assistenza, con indicazione dei principali
            ambiti di intervento.
          </motion.p>
        </div>
      </section>

      <Divider />

      {/* Colonna alternata */}
      <section className="py-24 px-6 bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            {aree.map((area, i) => (
              <div
                key={area.slug}
                className={`w-full md:w-[62%] ${i % 2 === 0 ? "mr-auto" : "ml-auto"}`}
              >
                <AreaCard area={area} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Nota informativa */}
      <section className="py-16 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="border-l-2 border-brass pl-6 max-w-2xl"
          >
            <p className="font-sans text-sm text-taupe leading-relaxed mb-2">
              Le aree indicate descrivono i principali ambiti di attività dello studio.
              Per questioni che non rientrano direttamente in queste categorie, o per
              chiarire se una situazione specifica può trovare assistenza, è possibile
              contattare direttamente lo studio.
            </p>
            <p className="font-sans text-xs text-stone italic">
              Lo studio tratta esclusivamente materia civile e non penale.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8"
          >
            <Button to="/contatti" variant="primary">Fissa una consulenza</Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
