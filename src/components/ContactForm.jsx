import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const INITIAL = {
  nome: "",
  email: "",
  telefono: "",
  oggetto: "",
  messaggio: "",
  privacy: false,
};

function Field({ label, error, children, required }) {
  return (
    <div>
      <label className="block font-sans text-sm font-medium text-ink mb-1.5">
        {label}
        {required && <span className="text-bordeaux ml-0.5" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 font-sans text-xs text-bordeaux" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

const inputCls =
  "w-full bg-bg border border-stone/60 px-4 py-3 font-sans text-sm text-ink placeholder:text-stone focus:outline-none focus:border-bordeaux transition-colors duration-200";

function validate(fields) {
  const e = {};
  if (!fields.nome.trim()) e.nome = "Il nome è obbligatorio.";
  if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    e.email = "Inserisci un indirizzo email valido.";
  if (!fields.oggetto.trim()) e.oggetto = "Indica l'oggetto del messaggio.";
  if (!fields.messaggio.trim() || fields.messaggio.trim().length < 10)
    e.messaggio = "Scrivi un messaggio di almeno 10 caratteri.";
  if (!fields.privacy)
    e.privacy = "Il consenso al trattamento dei dati è obbligatorio.";
  return e;
}

export default function ContactForm() {
  const [fields, setFields] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFields((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error("server");
      setStatus("ok");
      setFields(INITIAL);
    } catch {
      setStatus("error");
    }
  };

  if (status === "ok") {
    return (
      <div className="py-12 text-center">
        <div className="w-8 h-px bg-brass mx-auto mb-6" aria-hidden="true" />
        <h3 className="font-display text-2xl text-ink mb-3">Messaggio ricevuto</h3>
        <p className="font-sans text-taupe leading-relaxed">
          Rispondo solitamente entro un giorno lavorativo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Modulo di contatto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <Field label="Nome e cognome" error={errors.nome} required>
          <input
            type="text"
            name="nome"
            value={fields.nome}
            onChange={handleChange}
            placeholder="Mario Rossi"
            autoComplete="name"
            className={inputCls}
            aria-invalid={!!errors.nome}
          />
        </Field>
        <Field label="Email" error={errors.email} required>
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            placeholder="mario@esempio.it"
            autoComplete="email"
            className={inputCls}
            aria-invalid={!!errors.email}
          />
        </Field>
        <Field label="Telefono" error={errors.telefono}>
          <input
            type="tel"
            name="telefono"
            value={fields.telefono}
            onChange={handleChange}
            placeholder="+39 0871 000000"
            autoComplete="tel"
            className={inputCls}
          />
        </Field>
        <Field label="Oggetto" error={errors.oggetto} required>
          <input
            type="text"
            name="oggetto"
            value={fields.oggetto}
            onChange={handleChange}
            placeholder="Es. Consulenza separazione"
            className={inputCls}
            aria-invalid={!!errors.oggetto}
          />
        </Field>
      </div>

      <div className="mb-6">
        <Field label="Messaggio" error={errors.messaggio} required>
          <textarea
            name="messaggio"
            value={fields.messaggio}
            onChange={handleChange}
            rows={5}
            placeholder="Descrivi brevemente la situazione..."
            className={`${inputCls} resize-none`}
            aria-invalid={!!errors.messaggio}
          />
        </Field>
      </div>

      <div className="mb-8">
        <label className={`flex items-center gap-4 cursor-pointer border px-4 py-4 transition-all duration-200 ${
          errors.privacy
            ? "border-bordeaux/50 bg-bordeaux/[0.03]"
            : fields.privacy
            ? "border-bordeaux/35 bg-bordeaux/[0.03]"
            : "border-stone/30 hover:border-stone/50"
        }`}>
          <input
            type="checkbox"
            name="privacy"
            checked={fields.privacy}
            onChange={handleChange}
            className="sr-only peer"
            aria-invalid={!!errors.privacy}
          />
          <span className="flex-1 font-sans text-xs text-taupe leading-relaxed">
            Ho letto e accetto l'{" "}
            <Link
              to="/privacy"
              onClick={(e) => e.stopPropagation()}
              className="text-bordeaux hover:text-bordeauxDark underline underline-offset-2 transition-colors"
            >
              informativa sul trattamento dei dati personali
            </Link>
            .{" "}<span className="text-bordeaux">*</span>
          </span>
          <span className={`flex-shrink-0 w-4 h-4 border transition-all duration-200 flex items-center justify-center peer-focus-visible:ring-2 peer-focus-visible:ring-bordeaux peer-focus-visible:ring-offset-1 ${
            fields.privacy ? "border-bordeaux bg-bordeaux" : "border-stone/50"
          }`}>
            {fields.privacy && (
              <svg width="9" height="7" viewBox="0 0 9 7" fill="none" aria-hidden="true">
                <path d="M1 3.5L3.2 5.5L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </span>
        </label>
        {errors.privacy && (
          <p className="mt-2 font-sans text-xs text-bordeaux" role="alert">
            {errors.privacy}
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="mb-6 font-sans text-sm text-bordeaux bg-bordeaux/5 border border-bordeaux/20 px-4 py-3" role="alert">
          Si è verificato un errore nell'invio. Riprova o contattaci direttamente per telefono.
        </p>
      )}

      <Button type="submit" variant="primary" disabled={status === "sending"}>
        {status === "sending" ? "Invio in corso..." : "Invia messaggio"}
      </Button>

      <p className="mt-4 font-sans text-xs text-taupe">
        I campi contrassegnati con * sono obbligatori.
      </p>
    </form>
  );
}
