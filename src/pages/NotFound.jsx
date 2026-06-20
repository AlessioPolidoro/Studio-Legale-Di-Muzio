import { motion } from "framer-motion";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 bg-bg">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center max-w-md"
      >
        <p
          className="font-display text-[7rem] leading-none text-stone/30 select-none mb-0"
          aria-hidden="true"
        >
          404
        </p>
        <div className="w-8 h-px bg-brass mx-auto my-6" aria-hidden="true" />
        <h1 className="font-display text-3xl text-ink mb-4">
          Pagina non trovata
        </h1>
        <p className="font-sans text-taupe leading-relaxed mb-8">
          La pagina che stai cercando non esiste o è stata spostata.
          Usa la navigazione per tornare al sito.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/" variant="primary">Torna alla home</Button>
          <Button to="/contatti" variant="outline">Contatti</Button>
        </div>
      </motion.div>
    </section>
  );
}
