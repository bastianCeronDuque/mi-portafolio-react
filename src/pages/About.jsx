import { motion } from "framer-motion";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import devImg from "../assets/bastian-dev.jpg";
export default function About() {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <FadeInWhenVisible>
        <h1 className="titulo-pages-gradient">Sobre mí</h1>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <p className="about-container-p">
          ¡Hola! Soy Bastián Cerón, un apasionado por la tecnología, en
          transición desde el mundo de la gastronomía al desarrollo web. Estoy
          aprendiendo React y construyendo este portafolio para mostrar mis
          avances, proyectos y habilidades como desarrollador frontend.
        </p>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <p className="about-container-p">
          Actualmente estoy estudiando programación y creando proyectos con
          tecnologías modernas como React, React Router, Vite, Framer Motion y
          más. Este sitio crecerá conmigo a medida que aprenda. 💪🚀
        </p>
      </FadeInWhenVisible>
      <motion.img
        src={devImg}
        alt="Desarrollador Frontend"
        className="dev-img"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
        whileTap={{ scale: 0.95, rotate: -2 }}
        transition={{ type: "spring", stifness: 300, damping: 20 }}
      ></motion.img>
    </motion.div>
  );
}
