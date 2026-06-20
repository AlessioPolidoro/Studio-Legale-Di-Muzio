import { motion } from "framer-motion";
import Button from "../components/Button";
import Divider from "../components/Divider";
import AreaCard from "../components/AreaCard";
import { aree } from "../data/aree";
import { percorso } from "../data/percorso";

const ease = [0.25, 0.46, 0.45, 0.94];

function fadeUp(delay = 0) {
  return {
    initial:    { opacity: 0, y: 28 },
    animate:    { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease, delay },
  };
}

function slideIn(dir = "left", delay = 0) {
  return {
    initial:    { opacity: 0, x: dir === "left" ? -28 : 28 },
    whileInView:{ opacity: 1, x: 0 },
    viewport:   { once: true, margin: "-80px" },
    transition: { duration: 0.65, ease, delay },
  };
}

function revealUp(delay = 0) {
  return {
    initial:    { opacity: 0, y: 24 },
    whileInView:{ opacity: 1, y: 0 },
    viewport:   { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease, delay },
  };
}

export default function Home() {
  return (
    <>
      {/* ====================================================
          HERO
      ==================================================== */}
      <section className="min-h-[85vh] flex flex-col justify-center bg-bg px-6 py-24 relative overflow-hidden">
        {/* Monogramma decorativo di sfondo */}
        <span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-auto md:top-auto md:right-0 md:bottom-0 md:translate-x-0 md:translate-y-8 font-display font-semibold leading-none text-stone/[0.07] select-none pointer-events-none"
          style={{ fontSize: "clamp(10rem, 24vw, 22rem)" }}
          aria-hidden="true"
        >
          MdM
        </span>

        <div className="max-w-7xl mx-auto w-full">
          <motion.p {...fadeUp(0)} className="font-sans text-xs tracking-[0.22em] uppercase text-taupe mb-6">
            Avvocato civilista a Chieti
          </motion.p>
          <motion.h1
            {...fadeUp(0.1)}
            className="font-display font-semibold leading-[1.04] text-ink"
            style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
          >
            Avv. Maurizio<br />Di Muzio
          </motion.h1>
          <motion.div {...fadeUp(0.2)} className="w-16 h-px bg-brass my-8" aria-hidden="true" />
          <motion.p {...fadeUp(0.28)} className="font-sans text-lg md:text-xl text-taupe max-w-xl leading-relaxed mb-10">
            Il diritto civile richiede rigore tecnico e capacità di ascolto.
            Sono le due qualità che orientano ogni mandato dello studio,
            con sede a Chieti.
          </motion.p>
          <motion.div {...fadeUp(0.38)} className="flex flex-col sm:flex-row gap-4">
            <Button to="/contatti" variant="primary">Prendi un appuntamento</Button>
            <Button to="/studio" variant="outline">Chi sono</Button>
          </motion.div>
        </div>
      </section>

      {/* ====================================================
          PROFILO
      ==================================================== */}
      <section className="py-24 md:py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div {...slideIn("left")}>
            <p className="font-sans text-xs tracking-[0.22em] uppercase text-brass mb-5">
              Lo Studio
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
              Una pratica<br />radicata nel territorio
            </h2>
            <div className="w-8 h-px bg-brass my-8" aria-hidden="true" />
            <p className="font-sans text-taupe leading-relaxed mb-4">
              Maurizio Di Muzio esercita la professione di avvocato civilista con studio
              in Chieti ed è iscritto all'Ordine degli Avvocati di Chieti. Negli anni
              ha costruito una pratica orientata alla chiarezza nel rapporto con il cliente,
              nella gestione del mandato e nella comunicazione dei tempi e dei costi.
            </p>
            <p className="font-sans text-taupe leading-relaxed mb-8">
              Il diritto civile riguarda la vita delle persone: i contratti, le famiglie,
              le eredità, le opere dell'ingegno, i danni. Una materia ampia, articolata e
              profondamente umana.
            </p>
            <Button to="/studio" variant="outline">Leggi la storia professionale</Button>
          </motion.div>

          <motion.div {...slideIn("right", 0.1)}>
            <img
              src="/assets/ritratto.jpg"
              alt="Avv. Maurizio Di Muzio, avvocato civilista a Chieti"
              className="w-full aspect-[3/4] object-cover [filter:grayscale(1)_sepia(0.18)]"
            />
          </motion.div>
        </div>
      </section>

      {/* ====================================================
          PERCORSO PROFESSIONALE
      ==================================================== */}
      <section className="py-20 md:py-24 px-6 bg-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealUp()} className="mb-10">
            <p className="font-sans text-xs tracking-[0.22em] uppercase text-brass mb-4">
              Formazione e carriera
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">
              Percorso professionale
            </h2>
          </motion.div>
          <div className="flex flex-col max-w-xl">
            {percorso.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-brass mt-1.5" />
                  {i < percorso.length - 1 && (
                    <div className="flex-1 w-px bg-stone/40 mt-1.5" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="font-sans text-xs font-medium tracking-wide text-brass uppercase">
                    {item.anno}
                  </span>
                  <p className="font-display text-xl text-ink mt-0.5 mb-1">{item.etichetta}</p>
                  <p className="font-sans text-sm text-taupe">{item.testo}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ====================================================
          AREE DI COMPETENZA (prime 3)
      ==================================================== */}
      <section className="py-24 md:py-32 px-6 bg-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealUp()}>
            <p className="font-sans text-xs tracking-[0.22em] uppercase text-brass mb-5">
              Competenze
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-12">
              Aree di competenza
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {aree.slice(0, 3).map((area, i) => (
              <AreaCard key={area.slug} area={area} index={i} />
            ))}
          </div>

          <motion.div {...revealUp(0.1)}>
            <Button to="/aree" variant="outline">Tutte le aree di competenza</Button>
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* ====================================================
          METODO TEASER
      ==================================================== */}
      <section className="py-24 md:py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <motion.div {...revealUp()}>
            <p className="font-sans text-xs tracking-[0.22em] uppercase text-brass mb-5">
              Il metodo
            </p>
            <h2 className="font-display text-4xl text-ink leading-tight">
              Chiarezza<br />prima di tutto
            </h2>
            <div className="w-8 h-px bg-brass my-8" aria-hidden="true" />
            <p className="font-sans text-taupe leading-relaxed mb-4">
              La prima consulenza è un momento di ascolto. Si raccoglie la vicenda,
              si comprende cosa è in gioco, si valutano le opzioni con onestà.
              I costi sono comunicati per iscritto prima di iniziare, così il cliente
              sa sempre a che punto è il suo mandato.
            </p>
            <Button to="/metodo" variant="outline">Come lavora lo studio</Button>
          </motion.div>

          <motion.div {...revealUp(0.1)} className="divide-y divide-stone/30 mt-2">
            {[
              { n: "01", label: "Prima consulenza",  desc: "Ascolto, analisi e valutazione onesta delle opzioni disponibili." },
              { n: "02", label: "Trasparenza",        desc: "Costi e tempi comunicati per iscritto prima di iniziare." },
              { n: "03", label: "Mandato diretto",    desc: "Ogni pratica è seguita personalmente, senza intermediari." },
              { n: "04", label: "Aggiornamento",      desc: "Il cliente viene informato sullo stato del mandato con continuità." },
            ].map((item) => (
              <div key={item.label} className="flex gap-6 py-5">
                <span className="font-sans text-xs text-stone/50 font-medium tracking-widest pt-1 w-6 flex-shrink-0" aria-hidden="true">
                  {item.n}
                </span>
                <div>
                  <p className="font-display text-xl text-ink leading-snug mb-1">{item.label}</p>
                  <p className="font-sans text-sm text-taupe">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* ====================================================
          SEDE TEASER
      ==================================================== */}
      <section className="py-24 md:py-32 px-6 bg-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div {...slideIn("left")}>
            <div
              className="aspect-[4/3] bg-stone/15 border border-stone/35 flex flex-col items-center justify-center gap-3"
              role="img"
              aria-label="Chieti, Porta Pescara, centro storico di Teate"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-stone" aria-hidden="true">
                <rect x="3" y="10" width="18" height="11" rx="1" />
                <path d="M3 10l9-7 9 7" />
                <rect x="9" y="15" width="6" height="6" />
              </svg>
              <p className="font-sans text-xs text-taupe text-center px-6 leading-relaxed">
                Chieti &ndash; Porta Pescara<br />
                <span className="text-stone/70">foto in /public/assets/chieti-alta.jpg</span>
              </p>
            </div>
          </motion.div>

          <motion.div {...slideIn("right", 0.1)}>
            <p className="font-sans text-xs tracking-[0.22em] uppercase text-brass mb-5">
              La sede
            </p>
            <h2 className="font-display text-4xl text-ink leading-tight">
              Lo studio<br />a Chieti
            </h2>
            <div className="w-8 h-px bg-brass my-8" aria-hidden="true" />
            <p className="font-sans text-taupe leading-relaxed mb-4">
              Lo studio si trova in Via degli Agostiniani 46, nel centro storico
              di Chieti, a pochi passi da Porta Pescara, uno dei varchi
              storici della cinta muraria.
            </p>
            <p className="font-sans text-taupe leading-relaxed mb-8">
              Ricevere i clienti in questo contesto offre la riservatezza e la
              concentrazione che una consulenza legale richiede.
            </p>
            <Button to="/studio" variant="outline">Come raggiungerci</Button>
          </motion.div>
        </div>
      </section>

      {/* ====================================================
          CTA FINALE
      ==================================================== */}
      <section className="py-24 md:py-32 px-6 bg-bordeaux text-white text-center">
        <motion.div {...revealUp()} className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Inizia con una consulenza
          </h2>
          <div className="w-8 h-px bg-brass/50 mx-auto my-8" aria-hidden="true" />
          <p className="font-sans text-white/70 leading-relaxed mb-10 text-lg">
            Ogni vicenda legale è diversa. Il primo passo è raccontarla.
            È possibile scrivere o chiamare per fissare un appuntamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contatti" variant="solidLight">Contatta lo studio</Button>
            <Button to="/aree" variant="outlineLight">Aree di competenza</Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
