import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          role="dialog"
          aria-label="Avviso cookie"
          aria-live="polite"
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:w-80 z-40"
        >
          <div className="bg-surface border border-stone/40 shadow-2xl p-6">
            {/* Accento brass */}
            <div className="w-6 h-px bg-brass mb-5" aria-hidden="true" />

            <p className="font-sans text-sm text-taupe leading-relaxed mb-5">
              Utilizziamo solo cookie tecnici necessari al funzionamento del sito.{" "}
              <Link
                to="/privacy"
                className="text-bordeaux hover:text-bordeauxDark underline underline-offset-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordeaux"
              >
                Informativa privacy
              </Link>
            </p>

            <button
              onClick={accept}
              className="w-full font-sans text-xs tracking-[0.14em] uppercase font-medium bg-ink text-white px-6 py-3 hover:bg-bordeaux transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordeaux focus-visible:ring-offset-2"
              aria-label="Accetta cookie tecnici e chiudi avviso"
            >
              Ho capito
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
