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
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          role="dialog"
          aria-label="Avviso cookie"
          aria-live="polite"
          className="fixed bottom-0 left-0 right-0 z-40 bg-surface border-t border-stone/50 shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <p className="font-sans text-sm text-taupe leading-relaxed">
              Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento.{" "}
              <Link
                to="/privacy"
                className="text-bordeaux hover:text-bordeauxDark underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordeaux"
              >
                Informativa privacy e cookie
              </Link>
            </p>
            <button
              onClick={accept}
              className="flex-shrink-0 font-sans text-sm font-medium bg-bordeaux text-white px-5 py-2.5 hover:bg-bordeauxDark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordeaux focus-visible:ring-offset-2"
              aria-label="Accetta cookie tecnici e chiudi avviso"
            >
              Accetto
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
