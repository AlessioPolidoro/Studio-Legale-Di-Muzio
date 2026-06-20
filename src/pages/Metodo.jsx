import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faq } from "../data/faq";
import Button from "../components/Button";
import Divider from "../components/Divider";

const ease = [0.25, 0.46, 0.45, 0.94];

function revealUp(delay = 0) {
  return {
    initial:    { opacity: 0, y: 24 },
    whileInView:{ opacity: 1, y: 0 },
    viewport:   { once: true, margin: "-60px" },
    transition: { duration: 0.6, ease, delay },
  };
}

const pilastri = [
  {
    n: "01",
    title: "Prima consulenza",
    body: "Il primo incontro è un ascolto. Si raccoglie la vicenda nella sua interezza, si comprende la persona e si valuta cosa è effettivamente in gioco sul piano legale. Solo da qui può arrivare un'indicazione utile e concreta.",
  },
  {
    n: "02",
    title: "Trasparenza",
    body: "Ogni mandato inizia con un'analisi onesta della situazione. Questo significa indicare anche quando un'azione legale non conviene, quando i rischi superano i benefici attesi e quando esiste una strada extragiudiziale più efficace e meno costosa.",
  },
  {
    n: "03",
    title: "Costi e tempi",
    body: "I compensi professionali sono definiti per iscritto all'inizio del rapporto, nel rispetto dei parametri forensi. I tempi della giustizia civile non dipendono dall'avvocato, ma la gestione del mandato, tra aggiornamenti, scadenze e passaggi processuali, è seguita con continuità.",
  },
  {
    n: "04",
    title: "Rapporto diretto",
    body: "Maurizio Di Muzio segue personalmente ogni mandato. Il cliente ha un interlocutore preciso e conosce chi lavora al suo caso, senza passare da figure di contatto intermedie.",
  },
];

function AccordionItem({ item, index, open, onToggle }) {
  return (
    <div className="border-b border-stone/30">
      <button
        onClick={() => onToggle(index)}
        aria-expanded={open}
        className="w-full flex justify-between items-start gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordeaux focus-visible:ring-inset"
      >
        <span className="font-display text-lg text-ink leading-snug">{item.domanda}</span>
        <span
          className="flex-shrink-0 w-5 h-5 mt-0.5 text-brass transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 4v12M4 10h12" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="pb-5 font-sans text-taupe leading-relaxed text-sm">
              {item.risposta}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Metodo() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

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
            Metodo
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.08 }}
            className="font-display font-semibold text-ink leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Come lavora lo studio
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
            Il lavoro di un avvocato civilista non è solo tecnico. È anche
            una questione di metodo, di rapporto, di fiducia costruita nel tempo.
          </motion.p>
        </div>
      </section>

      <Divider />

      {/* Quattro pilastri */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pilastri.map((p, i) => (
              <motion.div
                key={p.n}
                {...revealUp(i * 0.07)}
                className="bg-bg border border-stone/35 p-8"
              >
                <div className="flex items-start gap-5 mb-6">
                  <span className="font-sans text-3xl font-medium text-stone/50 leading-none select-none" aria-hidden="true">
                    {p.n}
                  </span>
                  <div className="w-px h-8 bg-stone/40 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <h2 className="font-display text-2xl text-ink leading-snug">{p.title}</h2>
                </div>
                <div className="w-6 h-px bg-brass my-6" aria-hidden="true" />
                <p className="font-sans text-taupe text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Estratto testuale */}
      <section className="py-28 px-8 md:px-16 bg-bordeaux overflow-hidden">
        <motion.div
          {...revealUp()}
          className="max-w-4xl mx-auto relative"
        >
          <span
            className="absolute -top-4 -left-3 md:-left-5 font-display leading-none text-white/[0.12] select-none pointer-events-none"
            style={{ fontSize: "clamp(5rem, 10vw, 8rem)" }}
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <blockquote className="relative font-display text-xl md:text-2xl text-white leading-[1.5] pt-6">
            Ogni cliente dovrebbe capire lo stato del proprio mandato,
            conoscere i costi prima di sostenerli, e avere un interlocutore
            preciso di riferimento.<br />Non è un ideale: è il minimo che
            un avvocato debba garantire.
          </blockquote>
        </motion.div>
      </section>

      <Divider />

      {/* FAQ */}
      <section className="py-24 px-6 bg-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div {...revealUp()}>
            <p className="font-sans text-xs tracking-[0.22em] uppercase text-brass mb-5">
              Domande frequenti
            </p>
            <h2 className="font-display text-3xl text-ink leading-tight mb-4">
              Cosa vuoi<br />sapere?
            </h2>
            <p className="font-sans text-sm text-taupe leading-relaxed">
              Risposte alle domande più comuni su come funziona la
              professione, la prima consulenza e come fissare un appuntamento.
            </p>
          </motion.div>

          <motion.div {...revealUp(0.1)} className="md:col-span-2">
            {faq.map((item, i) => (
              <AccordionItem
                key={i}
                item={item}
                index={i}
                open={openIndex === i}
                onToggle={toggle}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section className="py-20 px-6 bg-surface">
        <motion.div {...revealUp()} className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-2xl text-ink mb-2">Pronto a iniziare?</h3>
            <p className="font-sans text-taupe">
              Scrivi o chiama per fissare una prima consulenza.
            </p>
          </div>
          <Button to="/contatti" variant="primary">Contattami</Button>
        </motion.div>
      </section>
    </>
  );
}
