import { motion } from "framer-motion";
import devImg from "../assets/bastian-dev.jpg";
export default function About() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      style={{
        maxWidth: "600px",
        margin: "4rem auto",
        padding: "1rem",
        lineHeight: "1.8rem",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          textAlign: "center",
          color: "var(--color-primary)",
        }}
      >
        Sobre mí
      </h1>
      <p>
        ¡Hola! Soy Bastián Cerón, un apasionado por la tecnología, en transición
        desde el mundo de la gastronomía al desarrollo web. Estoy aprendiendo
        React y construyendo este portafolio para mostrar mis avances, proyectos
        y habilidades como desarrollador frontend.
      </p>
      <p>
        Actualmente estoy estudiando programación y creando proyectos con
        tecnologías modernas como React, React Router, Vite, Framer Motion y
        más. Este sitio crecerá conmigo a medida que aprenda. 💪🚀
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
    </motion.div>
  );
}
