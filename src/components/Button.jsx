import { Link } from "react-router-dom";

const styles = {
  primary:
    "bg-bordeaux text-white hover:bg-bordeauxDark",
  outline:
    "border border-bordeaux text-bordeaux hover:bg-bordeaux/10 hover:border-bordeauxDark",
  ghost:
    "text-bordeaux hover:text-bordeauxDark underline underline-offset-4 decoration-bordeaux/40 hover:decoration-bordeauxDark",
  solidLight:
    "bg-white text-bordeaux hover:bg-bordeauxDark hover:text-white",
  outlineLight:
    "border border-white/70 text-white hover:bg-white hover:text-bordeaux",
  ghostLight:
    "text-white/75 hover:text-white underline underline-offset-4 decoration-white/30 hover:decoration-white",
};

const base =
  "w-full sm:w-auto inline-flex items-center justify-center text-center font-sans font-medium text-xs tracking-[0.14em] uppercase px-8 py-4 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordeaux focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
}) {
  const cls = `${base} ${styles[variant] ?? styles.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
