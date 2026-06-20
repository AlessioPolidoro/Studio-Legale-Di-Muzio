import { motion } from "framer-motion";

const defaultVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Section({
  children,
  className = "",
  id,
  variants = defaultVariants,
  bg = "",
  ...props
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      className={`py-20 md:py-28 px-6 ${bg} ${className}`}
      {...props}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </motion.section>
  );
}
