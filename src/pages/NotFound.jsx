import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94];

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-32 bg-bg relative overflow-hidden">
      {/* Numero decorativo di sfondo */}
      <span
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-semibold leading-none text-stone/[0.06] select-none pointer-events-none"
        style={{ fontSize: "clamp(14rem, 40vw, 32rem)" }}
        aria-hidden="true"
      >
        404
      </span>

      <div className="max-w-7xl mx-auto w-full relative">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          className="font-sans text-xs tracking-[0.22em] uppercase text-brass mb-5"
        >
          Pagina non trovata
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease, delay: 0.08 }}
          className="font-display font-semibold text-ink leading-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Questa pagina<br />non esiste.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-12 h-px bg-brass my-8"
          aria-hidden="true"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.25 }}
          className="font-sans text-taupe text-lg max-w-md leading-relaxed mb-10"
        >
          L'indirizzo che hai cercato non corrisponde a nessuna sezione dello studio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center font-sans font-medium text-xs tracking-[0.14em] uppercase px-8 py-4 bg-bordeaux text-white hover:bg-bordeauxDark transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordeaux focus-visible:ring-offset-2"
          >
            Torna alla home
          </Link>
          <Link
            to="/contatti"
            className="w-full sm:w-auto inline-flex items-center justify-center font-sans font-medium text-xs tracking-[0.14em] uppercase px-8 py-4 border border-bordeaux text-bordeaux hover:bg-bordeaux/10 hover:border-bordeauxDark transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordeaux focus-visible:ring-offset-2"
          >
            Contatta lo studio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
