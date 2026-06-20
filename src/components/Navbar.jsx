import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/studio",   label: "Lo Studio",           n: "01" },
  { to: "/aree",     label: "Aree di competenza",   n: "02" },
  { to: "/metodo",   label: "Metodo",               n: "03" },
  { to: "/contatti", label: "Contatti",             n: "04" },
];

const ease = [0.76, 0, 0.24, 1];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
  exit:   { opacity: 0, transition: { duration: 0.3,  ease: "easeIn", delay: 0.15 } },
};

const listVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
  exit:    { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
  exit:    { opacity: 0, y: 20, transition: { duration: 0.25, ease } },
};

const bottomVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, delay: 0.45 } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const linkCls = ({ isActive }) =>
    `font-sans text-sm tracking-wide transition-colors duration-150 focus-visible:outline-none focus-visible:underline ${
      isActive ? "text-bordeaux" : "text-ink hover:text-bordeaux"
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          open ? "bg-transparent border-none" :
          scrolled ? "bg-surface border-b border-stone/30" : "bg-bg/80 backdrop-blur-sm"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
          role="navigation"
          aria-label="Navigazione principale"
        >
          <Link
            to="/"
            className="group relative z-[60] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordeaux"
            aria-label="Avv. Maurizio Di Muzio - Homepage"
          >
            <span className={`block font-display text-lg leading-none transition-colors duration-300 ${open ? "text-white group-hover:text-brass" : "text-ink group-hover:text-bordeaux"}`}>
              Avv. Maurizio Di Muzio
            </span>
            <span className="block font-sans text-[0.6rem] tracking-[0.22em] uppercase mt-0.5 text-brass">
              Studio Legale
            </span>
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={linkCls}>{label}</NavLink>
              </li>
            ))}
          </ul>

          {/* Trigger testuale mobile */}
          <button
            className="relative z-[60] md:hidden py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordeaux"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
          >
            <span className={`font-sans text-xs tracking-[0.22em] uppercase transition-colors duration-300 ${open ? "text-white" : "text-ink"}`}>
              {open ? "Chiudi" : "Menu"}
            </span>
          </button>
        </nav>
      </header>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-0 z-40 bg-bordeauxDark flex flex-col overflow-hidden"
            aria-modal="true"
            role="dialog"
            aria-label="Menu di navigazione"
          >
            <div className="flex-1 flex flex-col px-6 pt-[88px] pb-10">
              {/* Accento brass */}
              <motion.div
                variants={bottomVariants}
                className="w-8 h-px bg-brass mb-10"
                aria-hidden="true"
              />

              {/* Voci */}
              <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex-1 flex flex-col justify-center gap-1"
                role="list"
              >
                {navLinks.map(({ to, label, n }) => (
                  <motion.li key={to} variants={itemVariants}>
                    <NavLink
                      to={to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `group flex items-baseline gap-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass ${
                          isActive ? "text-brass" : "text-white/90"
                        }`
                      }
                    >
                      <span className="font-sans text-[0.65rem] tracking-widest text-white/35 w-5 flex-shrink-0">
                        {n}
                      </span>
                      <span
                        className="font-display leading-none transition-colors duration-200 group-hover:text-brass"
                        style={{ fontSize: "clamp(1.6rem, 7.5vw, 3rem)" }}
                      >
                        {label}
                      </span>
                    </NavLink>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Indirizzo in fondo */}
              <motion.div variants={bottomVariants} className="border-t border-white/10 pt-6 text-center">
                <p className="font-sans text-xs text-white/40 tracking-wide">
                  Via degli Agostiniani 46 &mdash; 66100 Chieti
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
