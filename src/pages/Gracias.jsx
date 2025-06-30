import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Gracias.css";

export default function Gracias() {
  return (
    <motion.section
    className="gracias-wrapper"
    initial={{opacity:0, scale: 0.95}}
    animate={{opacity:1, scale: 1}}
    exit={{opacity:0, scale: 0.95}}
    transition={{ duration: 0.6 }}
    >
      <h2>🎉 ¡Gracias por tu mensaje!</h2>
      <p>
        Te responderé pronto. Mientras tanto, puedes volver al inicio o seguir
        explorando.
      </p>
      <Link to="/" className="btn-accion2">
        Volver al inicio
      </Link>
    </motion.section>
  );
}
