import { motion } from "framer-motion";
import Button from "../components/Button";
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

export default function Studio() {
  return (
    <>
      {/* ====================================================
          INTESTAZIONE
      ==================================================== */}
      <section className="py-24 md:py-32 px-6 bg-bg">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-sans text-xs tracking-[0.22em] uppercase text-brass mb-5"
          >
            Lo Studio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.08 }}
            className="font-display font-semibold text-ink leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Maurizio Di Muzio
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="w-16 h-px bg-brass my-8"
            aria-hidden="true"
          />
        </div>
      </section>

      <Divider />

      {/* ====================================================
          BIO + RITRATTO
      ==================================================== */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <motion.div {...revealUp()}>
            <p className="font-sans text-xs tracking-[0.22em] uppercase text-brass mb-5">
              Profilo
            </p>
            <h2 className="font-display text-3xl text-ink leading-snug">
              Il diritto civile come<br />scelta di campo
            </h2>
            <div className="w-8 h-px bg-brass my-8" aria-hidden="true" />
            <div className="space-y-4 font-sans text-taupe leading-relaxed">
              <p>
                Maurizio Di Muzio si è laureato in Giurisprudenza all'Università degli Studi
                "G. d'Annunzio" di Chieti-Pescara e ha conseguito l'abilitazione all'esercizio
                della professione forense. È iscritto all'Albo degli Avvocati dell'Ordine di
                Chieti, dove esercita con studio nel centro storico di Chieti.
              </p>
              <p>
                La scelta di concentrarsi esclusivamente sul diritto civile è una direzione
                precisa. Il diritto civile riguarda la vita delle persone: i contratti che
                stipulano, le famiglie che costruiscono e a volte sciolgono, le eredità che
                lasciano o ricevono, le opere dell'ingegno che creano, i danni che subiscono
                o causano. È il diritto delle relazioni umane e richiede tanto rigore tecnico
                quanto capacità di ascolto.
              </p>
              <p>
                Negli anni ha sviluppato uno stile professionale diretto e concreto, che
                privilegia il confronto aperto con i clienti, la trasparenza sui percorsi
                possibili e sui loro limiti, e una gestione del mandato che tiene il cliente
                informato. La chiarezza è parte integrante della prestazione professionale.
              </p>
            </div>
            <div className="mt-8">
              <Button to="/contatti" variant="primary">Fissa un appuntamento</Button>
            </div>
          </motion.div>

          <motion.div {...revealUp(0.1)} className="space-y-6">
            <img
              src="/assets/ritratto.jpg"
              alt="Avv. Maurizio Di Muzio, avvocato civilista a Chieti"
              className="w-full aspect-[3/4] object-cover [filter:grayscale(1)_sepia(0.18)]"
            />

            {/* Credenziali */}
            <div className="border border-stone/35 p-6 bg-bg space-y-3">
              <div className="w-6 h-px bg-brass my-6" aria-hidden="true" />
              <p className="font-sans text-sm text-ink">
                <span className="font-medium">Ordine:</span>{" "}
                <span className="text-taupe">Avvocati di Chieti, n. [DA INSERIRE]</span>
              </p>
              <p className="font-sans text-sm text-ink">
                <span className="font-medium">Materia:</span>{" "}
                <span className="text-taupe">Diritto civile (esclusivamente)</span>
              </p>
              <p className="font-sans text-sm text-ink">
                <span className="font-medium">Sede:</span>{" "}
                <span className="text-taupe">Via degli Agostiniani 46, Chieti</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* ====================================================
          DOVE SIAMO
      ==================================================== */}
      <section className="py-20 px-6 bg-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealUp()} className="mb-10">
            <p className="font-sans text-xs tracking-[0.22em] uppercase text-brass mb-4">
              Dove siamo
            </p>
            <h2 className="font-display text-3xl text-ink leading-tight">
              Studio a Chieti
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Mappa */}
            <motion.div {...revealUp(0.05)}>
              <div className="aspect-[4/3] overflow-hidden border border-stone/35">
                <iframe
                  title="Studio Legale Avv. Maurizio Di Muzio - Chieti"
                  src="https://maps.google.com/maps?q=Via+degli+Agostiniani+46,+66100+Chieti+CH,+Italia&t=h&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Contatti */}
            <motion.div {...revealUp(0.1)}>
              <p className="font-sans text-xs tracking-[0.22em] uppercase text-brass mb-5">
                Come raggiungerci
              </p>
              <div className="w-8 h-px bg-brass my-8" aria-hidden="true" />
              <address className="not-italic space-y-4 font-sans text-sm">
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-brass mb-1">Indirizzo</p>
                  <p className="text-taupe">
                    Via degli Agostiniani 46<br />
                    66100 Chieti (CH)
                  </p>
                  <p className="text-xs text-stone mt-1">A pochi passi da Porta Pescara</p>
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
        </div>
      </section>

      <Divider />

      {/* ====================================================
          CTA
      ==================================================== */}
      <section className="py-20 px-6 bg-surface text-center">
        <motion.div {...revealUp()} className="max-w-2xl mx-auto">
          <h3 className="font-display text-2xl text-ink mb-3">Hai una questione<br className="md:hidden" /> di diritto civile?</h3>
          <p className="font-sans text-taupe mb-8">Scrivi o chiama per fissare una prima consulenza.</p>
          <div className="flex justify-center">
            <Button to="/contatti" variant="primary">Contattami</Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
