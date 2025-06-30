import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    setEnviado(true);
    setFormData({
      nombre: "",
      email: "",
      mensaje: "",
    });
    setTimeout(() => {
      setEnviado(false);
    }, 3000);
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
        <form onSubmit={handleSubmit} className="contact-form">
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
          <AnimatePresence>
            {enviado && <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="contact-form-menssage"
            >✅ ¡Mensaje enviado con éxito!</motion.div>}
          </AnimatePresence>
        </form>
      </div>
    </motion.div>
  );
}
