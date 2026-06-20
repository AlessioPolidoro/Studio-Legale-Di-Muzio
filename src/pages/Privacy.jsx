import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94];

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-xl text-ink mb-3">{title}</h2>
      <div className="w-6 h-px bg-brass mb-4" aria-hidden="true" />
      <div className="font-sans text-sm text-taupe leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

export default function Privacy() {
  return (
    <>
      <section className="py-24 md:py-28 px-6 bg-bg border-b border-stone/25">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="font-sans text-xs tracking-[0.22em] uppercase text-brass mb-5"
          >
            Informativa legale
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.08 }}
            className="font-display font-semibold text-ink leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Privacy e Cookie
          </motion.h1>
        </div>
      </section>

      <section className="py-20 px-6 bg-surface">
        <div className="max-w-3xl mx-auto">

          <p className="font-sans text-xs text-stone mb-10 italic">
            Informativa ai sensi degli artt. 13-14 del Regolamento (UE) 2016/679 (GDPR).
            Testo di carattere informativo e PLACEHOLDER - da aggiornare con il
            testo definitivo redatto dal titolare o dal proprio consulente privacy.
          </p>

          <Section title="1. Titolare del trattamento">
            <p>
              Il titolare del trattamento dei dati personali è Avv. Maurizio Di Muzio,
              con studio in [indirizzo placeholder], 66100 Chieti (CH).
              Email: [email placeholder]. PEC: [pec placeholder].
            </p>
          </Section>

          <Section title="2. Dati raccolti">
            <p>
              Il sito raccoglie i dati personali forniti volontariamente dall'utente
              tramite il modulo di contatto: nome e cognome, indirizzo email, numero
              di telefono (facoltativo), oggetto e contenuto del messaggio.
            </p>
            <p>
              Come tutti i siti web, il sito registra automaticamente alcuni dati
              tecnici di navigazione (indirizzo IP, tipo di browser, pagine visitate,
              data e ora dell'accesso) nei log del server. Questi dati sono utilizzati
              esclusivamente per finalità tecniche e di sicurezza.
            </p>
          </Section>

          <Section title="3. Finalita e base giuridica">
            <p>
              I dati forniti tramite il modulo di contatto sono trattati per rispondere
              alle richieste dell'utente (base giuridica: esecuzione di misure precontrattuali
              adottate su richiesta dell'interessato, art. 6, par. 1, lett. b) GDPR).
            </p>
            <p>
              I dati tecnici di navigazione sono trattati per garantire la sicurezza
              del sito (base giuridica: legittimo interesse del titolare, art. 6,
              par. 1, lett. f) GDPR).
            </p>
          </Section>

          <Section title="4. Conservazione dei dati">
            <p>
              I dati forniti tramite il modulo di contatto sono conservati per il
              tempo strettamente necessario alla gestione della richiesta e, in caso
              di instaurazione di un rapporto professionale, per tutta la durata del
              mandato e per i successivi termini di prescrizione previsti dalla legge.
            </p>
            <p>
              I dati di navigazione sono conservati per il tempo strettamente necessario
              alle finalità per cui sono stati raccolti.
            </p>
          </Section>

          <Section title="5. Destinatari dei dati">
            <p>
              I dati personali non sono ceduti a terzi per finalità di marketing.
              Possono essere comunicati a soggetti che forniscono servizi tecnici
              accessori (es. hosting, servizi di posta elettronica) nella qualità
              di responsabili del trattamento ex art. 28 GDPR.
            </p>
          </Section>

          <Section title="6. Trasferimento dati extra-UE">
            <p>
              I dati non sono trasferiti fuori dall'Unione Europea, salvo che il
              fornitore del servizio di posta elettronica utilizzato per gestire
              le richieste non preveda server al di fuori del SEE. In tale caso,
              il trasferimento avviene nel rispetto delle garanzie previste dal
              Capo V del GDPR.
            </p>
          </Section>

          <Section title="7. Diritti dell'interessato">
            <p>
              In qualità di interessato, hai diritto di accedere ai tuoi dati personali,
              ottenerne la rettifica o la cancellazione, richiedere la limitazione del
              trattamento, opporti al trattamento e richiedere la portabilità dei dati.
              Hai inoltre il diritto di proporre reclamo all'Autorità di controllo
              (Garante per la protezione dei dati personali, www.garanteprivacy.it).
            </p>
            <p>
              Per esercitare i tuoi diritti, scrivi a: [email placeholder].
            </p>
          </Section>

          <Section title="8. Cookie">
            <p>
              Questo sito utilizza esclusivamente cookie tecnici, necessari al
              funzionamento del sito stesso (ad es. per ricordare la preferenza
              relativa al consenso cookie). Non vengono utilizzati cookie di
              profilazione, cookie di terze parti a fini pubblicitari, ne cookie
              di analisi comportamentale.
            </p>
            <p>
              I cookie tecnici non richiedono il consenso dell'utente ai sensi
              della normativa vigente. L'utente può comunque disabilitare i cookie
              nelle impostazioni del proprio browser; la disabilitazione dei cookie
              tecnici potrebbe compromettere alcune funzionalità del sito.
            </p>
          </Section>

          <p className="font-sans text-xs text-stone italic mt-8 pt-8 border-t border-stone/30">
            Ultimo aggiornamento: [data placeholder]. Testo PLACEHOLDER - da finalizzare
            con il testo definitivo dell'informativa.
          </p>
        </div>
      </section>
    </>
  );
}
