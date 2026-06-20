// api/contact.js - Serverless function Vercel
//
// ALTERNATIVA PER PREVIEW SENZA BACKEND (non implementata qui):
//
// Opzione A - Formspree:
//   const res = await fetch("https://formspree.io/f/[YOUR_FORM_ID]", {
//     method: "POST",
//     headers: { "Content-Type": "application/json", Accept: "application/json" },
//     body: JSON.stringify({ nome, email, telefono, oggetto, messaggio }),
//   });
//
// Opzione B - mailto: precompilato (in ContactForm.jsx, al posto del fetch):
//   const body = `Nome: ${nome}\nTelefono: ${telefono || "n/d"}\n\n${messaggio}`;
//   window.location.href =
//     `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(oggetto)}&body=${encodeURIComponent(body)}`;
//
// PRODUZIONE:
//   npm i resend
//   Configurare RESEND_API_KEY e CONTACT_TO_EMAIL nelle variabili d'ambiente Vercel.
//   In locale: usare `vercel dev` per eseguire la function.
//
// NOTA SICUREZZA: gli input utente sono sanitizzati prima di essere inseriti
// nell'HTML dell'email per evitare XSS.

import { Resend } from "resend";

function esc(str) {
  return String(str ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo non consentito" });
  }

  const { nome, email, telefono, oggetto, messaggio } = req.body ?? {};

  // Validazione server-side
  if (!nome || !email || !oggetto || !messaggio) {
    return res.status(400).json({ error: "Campi obbligatori mancanti" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Indirizzo email non valido" });
  }

  if (messaggio.trim().length < 10) {
    return res.status(400).json({ error: "Messaggio troppo breve" });
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
    console.error("Variabili d'ambiente RESEND_API_KEY o CONTACT_TO_EMAIL mancanti");
    return res.status(500).json({ error: "Configurazione server mancante" });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Studio Di Muzio <noreply@avvdimuzio.it>",
      to:   process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `[Studio Di Muzio] ${esc(oggetto)}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; color: #1B1714; padding: 24px;">
          <h2 style="font-size: 1.25rem; margin-bottom: 16px; color: #6B2A2E;">
            Nuovo messaggio dal sito
          </h2>
          <table style="width:100%; border-collapse: collapse; font-size: 0.9rem;">
            <tr>
              <td style="padding: 6px 12px 6px 0; color: #6E6557; width: 120px; vertical-align: top;">Nome</td>
              <td style="padding: 6px 0;">${esc(nome)}</td>
            </tr>
            <tr>
              <td style="padding: 6px 12px 6px 0; color: #6E6557; vertical-align: top;">Email</td>
              <td style="padding: 6px 0;">${esc(email)}</td>
            </tr>
            ${telefono ? `
            <tr>
              <td style="padding: 6px 12px 6px 0; color: #6E6557; vertical-align: top;">Telefono</td>
              <td style="padding: 6px 0;">${esc(telefono)}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 6px 12px 6px 0; color: #6E6557; vertical-align: top;">Oggetto</td>
              <td style="padding: 6px 0;">${esc(oggetto)}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #C9BFAE; margin: 16px 0;" />
          <p style="color: #6E6557; font-size: 0.8rem; margin-bottom: 8px;">Messaggio:</p>
          <p style="white-space: pre-wrap; line-height: 1.6;">${esc(messaggio)}</p>
          <hr style="border: none; border-top: 1px solid #C9BFAE; margin: 24px 0 12px;" />
          <p style="font-size: 0.75rem; color: #C9BFAE;">
            Messaggio ricevuto tramite il modulo di contatto del sito avvdimuzio.it
          </p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Errore invio email Resend:", err);
    return res.status(500).json({ error: "Errore nell'invio del messaggio" });
  }
}
