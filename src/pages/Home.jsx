import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedToggle from "../components/AnimatedToggle";
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
        whileHover={{ scale: 1.05, rotate: 2 }}
        whileTap={{ scale: 0.95, rotate: -2 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{type:'spring',stifness: 300, damping: 20}}
        >
        </motion.img>
        <motion.button
        className="btn-accion"
        whileHover={{ 
          scale: 1.1,
          backgroundColor: 'var(--color-accent)',
          boxShadow: "0px 0px 12px rgba(99, 102, 241, 0.6)"
         }}
        whileTap={{ scale: 0.95 }}
        disabled
        >
          Próximamente: Mis proyectos 💻
        </motion.button>
        <AnimatedToggle />
      </motion.div>
    </>
  );
}
