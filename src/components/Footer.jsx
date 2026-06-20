import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/studio", label: "Lo Studio" },
  { to: "/aree", label: "Aree di competenza" },
  { to: "/metodo", label: "Metodo" },
  { to: "/contatti", label: "Contatti" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            {/* LOGO PLACEHOLDER: sostituire con logo reale quando disponibile */}
            <div className="font-display text-xl text-white mb-0.5">
              Avv. Maurizio Di Muzio
            </div>
            <div className="font-sans text-[0.6rem] tracking-[0.22em] uppercase text-brass mb-5">
              Studio Legale
            </div>
            <p className="font-sans text-sm text-white/50 leading-relaxed">
              Avvocato civilista.<br />
              Studio a Chieti.
            </p>
          </div>

          {/* Navigazione */}
          <div>
            <div className="font-sans text-xs tracking-[0.18em] uppercase text-brass mb-4">
              Pagine
            </div>
            <ul className="space-y-2" role="list">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="font-sans text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <div className="font-sans text-xs tracking-[0.18em] uppercase text-brass mb-4">
              Contatti
            </div>
            <address className="not-italic space-y-2 font-sans text-sm text-white/55">
              <p>
                Via degli Agostiniani 46<br />
                66100 Chieti (CH)
              </p>
              <p>Tel. <a href="tel:+390000000000" className="hover:text-white transition-colors">[DA INSERIRE]</a></p>
              <p>
                <a href="mailto:studio@esempio.it" className="hover:text-white transition-colors">
                  [DA INSERIRE]
                </a>
              </p>
              <p className="text-white/35 text-xs">PEC: [DA INSERIRE]</p>
            </address>
          </div>
        </div>

        {/* Hairline + bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="font-sans text-xs text-white/30">
            &copy; {new Date().getFullYear()} Avv. Maurizio Di Muzio. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="font-sans text-xs text-white/35 hover:text-white/65 transition-colors"
            >
              Privacy e Cookie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
