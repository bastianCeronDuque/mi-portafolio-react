import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedToggle() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="animate-toggle-container">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setVisible(!visible)}
        className="btn-accion2"
      >
        {visible ? "Ocultar mensaje" : "Ver mas!"}
      </motion.button>
      <AnimatePresence>
        {visible && (
          <motion.div
            key="mensaje"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            style={{ marginTop: "2rem", fontSize: "1.2rem", color: "#4ade80" }}
          >
            ✨{" "}
            <h2 style={{ fontSize: "2rem" }}>
              🪛Estamos en fase de construccion🔨
            </h2>{" "}
            <code>Inspiracion</code> + <code>Investigacion</code> + <code>Invencion</code> + <code>Imaginacion</code> + <code>Ingenio</code>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
