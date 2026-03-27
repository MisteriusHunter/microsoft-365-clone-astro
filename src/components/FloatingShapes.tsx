import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0">
      <motion.div
        className="absolute left-6 top-8 h-16 w-16 rounded-2xl bg-gradient-to-br from-[#f35325] to-[#ff4875] blur-[0.5px]"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute left-6 top-28 h-24 w-24 rounded-3xl bg-gradient-to-br from-[#05a6f0] to-[#81bc06]"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}
