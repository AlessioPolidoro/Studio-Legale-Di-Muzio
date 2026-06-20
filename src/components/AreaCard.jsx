import { motion } from "framer-motion";

export default function AreaCard({ area, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.07,
      }}
      className="bg-surface border border-stone/50 p-8 hover:border-bordeaux/40 transition-colors duration-300 group flex flex-col"
    >
      <div className="w-8 h-px bg-brass mb-6 group-hover:w-14 transition-all duration-400" />
      <h3 className="font-display text-2xl text-ink mb-3 leading-snug">{area.title}</h3>
      <p className="font-sans text-sm text-taupe leading-relaxed mb-6">{area.summary}</p>
      <ul className="space-y-2 mt-auto">
        {area.points.map((point, i) => (
          <li key={i} className="font-sans text-sm text-ink flex items-start gap-3">
            <span className="w-1 h-1 rounded-full bg-brass mt-[0.45rem] flex-shrink-0" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
