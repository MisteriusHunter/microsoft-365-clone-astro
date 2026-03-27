import { motion } from "framer-motion";

export default function HeroIntroAnimated() {
  return (
    <>
      <motion.h1
        className="mt-4 text-[52px] font-semibold leading-[1.1] tracking-[-0.02em] text-black"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
      >
        Impulsa tu productividad al máximo
      </motion.h1>

      <motion.p
        className="mx-auto mt-4 max-w-[620px] text-[16px] leading-[1.6] text-[#605e5c]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
      >
        Consigue aplicaciones líderes en productividad con IA integrada, seguridad digital
        avanzada y almacenamiento en la nube, todo en un solo plan.
      </motion.p>
    </>
  );
}
