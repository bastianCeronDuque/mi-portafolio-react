import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const formFree = "https://formspree.io/f/mnnvwjvz";
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <motion.div
      className="contact-wrapper"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      <div className="contact-content">
        <h2 className="titulo-pages-gradient">Contáctame</h2>
        <p>¿Tienes un proyecto o idea?</p>
        <p>¡Hablemos!</p>
        <form 
        action={formFree} 
        method="POST" 
        className="contact-form">
          <input
            type="hidden"
            name="_redirect"
            value="https://bastian-ceron.netlify.app/gracias"
          />
          <motion.input
            type="text"
            name="nombre"
            placeholder="🧑 Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            required
          />
          <motion.input
            type="email"
            name="email"
            placeholder="✉️ Tu correo"
            value={formData.email}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            required
          />
          <motion.textarea
            name="mensaje"
            placeholder="💬 Tu mensaje"
            rows={5}
            value={formData.mensaje}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-accion2"
          >
            Enviar
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
