import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import devImg from "../assets/bastian-dev.jpg";
import "../styles/Home.css";
export default function Home() {
  return (
    <>
      <motion.div
        className="home-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="titulo-gradient">¡Bienvenido a mi portafolio!</h1>
        <p className="subtitulo" style={{ fontSize: "1.2rem" }}>
          Bienvenido a mi portafolio. Aquí muestro mi progreso como desarrollador frontend en React. 
        </p>
        <motion.img
        src={devImg}
        alt="Desarrollador Frontend"
        className="dev-img"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        >
        </motion.img>
        <motion.button
        className="btn-accion"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled
        >
          Próximamente: Mis proyectos 💻
        </motion.button>
        <h2 style={{ fontSize: "2rem" }}>
          🪛Estamos en fase de construccion🔨
        </h2>
      </motion.div>
    </>
  );
}
