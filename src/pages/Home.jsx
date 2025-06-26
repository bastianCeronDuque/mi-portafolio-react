import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginTopn: "5rem" }}
      >
        <h1 style={{ fontSize: "3rem" }}>¡Bienvenido a mi portafolio! 🚀</h1>
        <p style={{ fontSize: "1.2rem", color: "var(--color-muted)" }}>
          Cada línea de código es una oportunidad 💡
        </p>
      </motion.div>
    </>
  );
}
