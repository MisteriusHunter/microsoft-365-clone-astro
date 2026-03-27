import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const categories = [
  "Para individuos",
  "Para MIPYMES ›",
  "Para grandes empresas ›",
  "Para el ámbito educativo ›",
];

const hints = [
  "Contenido para uso personal y familiar.",
  "Soluciones para pequeñas y medianas empresas.",
  "Microsoft 365 para grandes organizaciones.",
  "Herramientas para educación.",
];

export default function HeroCategoryBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeHint = useMemo(() => hints[activeIndex], [activeIndex]);

  return (
    <>
      <div style={{ marginTop: "3rem", width: "100%", display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "72%",
            borderRadius: "9999px",
            border: "1px solid #e1dfdd",
            background: "#ffffff",
            padding: "8px 8px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
            position: "relative",
          }}
        >
          <motion.div
            className="hero-segment-indicator"
            initial={false}
            animate={{
              x: `${activeIndex * 100}%`,
            }}
            transition={{ type: "spring", stiffness: 360, damping: 34, mass: 0.35 }}
          />

          {categories.map((label, index) => (
            <button
              key={label}
              className={`segment relative z-[1] ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <p id="hero-segment-hint" style={{ marginTop: "0.75rem", fontSize: "12px", color: "#605e5c", textAlign: "center" }}>
        {activeHint}
      </p>
    </>
  );
}
