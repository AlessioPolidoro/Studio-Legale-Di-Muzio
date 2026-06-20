import { motion } from "framer-motion";
import Button from "../components/Button";

const ease = [0.25, 0.46, 0.45, 0.94];

function revealUp(delay = 0) {
  return {
    initial:    { opacity: 0, y: 24 },
    whileInView:{ opacity: 1, y: 0 },
    viewport:   { once: true, margin: "-60px" },
    transition: { duration: 0.65, ease, delay },
  };
}

export default function Sede() {
  return (
    <>
      {/* Intestazione */}
      <section className="py-24 md:py-28 px-6 bg-bg border-b border-stone/25">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="font-sans text-xs tracking-[0.22em] uppercase text-brass mb-5"
          >
            La Sede
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.08 }}
            className="font-display font-semibold text-ink leading-tight mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Chieti Alta, Teate
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="w-16 h-px bg-brass"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Racconto della citta + immagini */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <motion.div {...revealUp()}>
            <h2 className="font-display text-3xl text-ink mb-6 leading-snug">
              Un luogo scelto,<br />non soltanto abitato
            </h2>
            <div className="w-8 h-px bg-brass mb-6" aria-hidden="true" />
            <div className="space-y-4 font-sans text-taupe leading-relaxed">
              <p>
                Lo studio si trova in Via degli Agostiniani 46, nel centro storico
                di Chieti Alta, a pochi passi da Porta Pescara, uno dei varchi
                storici della cinta muraria e un punto di riferimento riconoscibile
                della città.
              </p>
              <p>
                Ricevere i clienti in questo contesto offre la riservatezza e la
                concentrazione che una consulenza legale richiede. La posizione nel
                centro antico facilita anche l'accesso alle istituzioni e agli uffici
                giudiziari della città.
              </p>
            </div>
          </motion.div>

          <motion.div {...revealUp(0.1)} className="space-y-5">
            {/* PLACEHOLDER: inserire foto Porta Pescara in /public/assets/porta-pescara.jpg (formato 4:3) */}
            <div
              className="aspect-[4/3] bg-stone/15 border border-stone/35 flex flex-col items-center justify-center gap-3"
              role="img"
              aria-label="Porta Pescara, Chieti Alta"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-stone" aria-hidden="true">
                <rect x="3" y="10" width="18" height="11" rx="1" />
                <path d="M3 10l9-7 9 7" />
                <rect x="9" y="15" width="6" height="6" />
              </svg>
              <p className="font-sans text-xs text-taupe text-center px-6 leading-relaxed">
                Porta Pescara, Chieti Alta<br />
                <span className="text-stone/70">foto in /public/assets/porta-pescara.jpg</span>
              </p>
            </div>

            {/* PLACEHOLDER: inserire foto centro storico in /public/assets/chieti-alta.jpg (formato 4:3) */}
            <div
              className="aspect-[4/3] bg-stone/15 border border-stone/35 flex flex-col items-center justify-center gap-3"
              role="img"
              aria-label="Centro storico di Chieti Alta, Teate"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-stone" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3v9l4 4" />
              </svg>
              <p className="font-sans text-xs text-taupe text-center px-6 leading-relaxed">
                Centro storico di Chieti Alta<br />
                <span className="text-stone/70">foto in /public/assets/chieti-alta.jpg</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dettaglio pietra */}
      <section className="py-20 px-6 bg-bg border-t border-stone/25">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealUp()} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* PLACEHOLDER: inserire dettaglio texture pietra in /public/assets/pietra-texture.jpg (formato 1:1) */}
            <div
              className="aspect-square bg-stone/15 border border-stone/35 flex flex-col items-center justify-center gap-3"
              role="img"
              aria-label="Dettaglio pietra antica, Chieti Alta"
            >
              <p className="font-sans text-xs text-taupe text-center px-4 leading-relaxed">
                Texture pietra<br />
                <span className="text-stone/70">/public/assets/pietra-texture.jpg</span>
              </p>
            </div>
            <div className="md:col-span-2 flex flex-col justify-center">
              <h2 className="font-display text-3xl text-ink mb-4 leading-snug">
                Pietra antica,<br />professione moderna
              </h2>
              <div className="w-8 h-px bg-brass mb-4" aria-hidden="true" />
              <p className="font-sans text-taupe leading-relaxed">
                Chieti Alta è piccola abbastanza da far pesare la reputazione,
                grande abbastanza da offrire un bacino di relazioni professionali
                solide. Il radicamento nel territorio non è solo geografico: è
                parte di un modo di esercitare la professione che considera la
                relazione e la fiducia tanto quanto la competenza tecnica.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Indirizzo */}
      <section className="py-24 px-6 bg-surface border-t border-stone/25">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealUp()} className="max-w-lg">
            <p className="font-sans text-xs tracking-[0.22em] uppercase text-brass mb-5">
              Come raggiungerci
            </p>
            <h2 className="font-display text-3xl text-ink mb-6 leading-snug">
              Lo studio a Chieti Alta
            </h2>
            <div className="w-8 h-px bg-brass mb-6" aria-hidden="true" />

            <address className="not-italic space-y-4 font-sans text-sm">
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-brass mb-1">Indirizzo</p>
                <p className="text-taupe">
                  Via degli Agostiniani 46<br />
                  66100 Chieti (CH)
                </p>
                <p className="text-xs text-stone mt-1">A pochi passi da Porta Pescara, Chieti Alta</p>
              </div>
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-brass mb-1">Telefono</p>
                <p className="text-taupe">
                  <a href="tel:+390000000000" className="hover:text-bordeaux transition-colors">
                    [DA INSERIRE]
                  </a>
                </p>
              </div>
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-brass mb-1">Email</p>
                <p className="text-taupe">
                  <a href="mailto:studio@esempio.it" className="hover:text-bordeaux transition-colors">
                    [DA INSERIRE]
                  </a>
                </p>
              </div>
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-brass mb-1">Orari di ricevimento</p>
                <p className="text-taupe">
                  Lunedì &ndash; Venerdì: 9:00 &ndash; 18:00<br />
                  Sabato e domenica: chiuso<br />
                  <span className="text-xs text-stone italic">
                    Appuntamenti anche fuori orario su richiesta.
                  </span>
                </p>
              </div>
            </address>

            <div className="mt-8">
              <Button to="/contatti" variant="primary">Fissa un appuntamento</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
