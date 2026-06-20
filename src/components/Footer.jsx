import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/studio",   label: "Lo Studio" },
  { to: "/aree",     label: "Aree di competenza" },
  { to: "/metodo",   label: "Metodo" },
  { to: "/contatti", label: "Contatti" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">

        {/* Brand */}
        <div className="font-display text-xl text-white mb-0.5">
          Avv. Maurizio Di Muzio
        </div>
        <div className="font-sans text-[0.6rem] tracking-[0.22em] uppercase text-brass mb-10">
          Studio Legale
        </div>

        {/* Navigazione */}
        <p className="font-sans text-xs tracking-[0.22em] uppercase text-brass mb-5">Navigazione</p>
        <ul className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-y-3 md:gap-x-8 mb-10" role="list">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className="font-sans text-sm text-white/50 hover:text-white transition-colors"
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Contatti */}
        <address className="not-italic font-sans text-sm text-white/35 leading-relaxed mb-14">
          Via degli Agostiniani 46, 66100 Chieti (CH)<br />
          Tel.{" "}
          <a href="tel:+390000000000" className="hover:text-white/65 transition-colors">
            [DA INSERIRE]
          </a>
          {" · "}
          <a href="mailto:studio@esempio.it" className="hover:text-white/65 transition-colors">
            [DA INSERIRE]
          </a>
        </address>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 space-y-2">
          <Link
            to="/privacy"
            className="block font-sans text-xs text-white/40 hover:text-white/65 transition-colors"
          >
            Privacy e Cookie
          </Link>
          <p className="font-sans text-xs text-white/20">
            &copy; {new Date().getFullYear()} Avv. Maurizio Di Muzio. Tutti i diritti riservati.
          </p>
        </div>

      </div>
    </footer>
  );
}
