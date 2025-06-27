import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import About from "../pages/About";
// import Projects from '../pages/Projects';
// import Contact from '../pages/Contact';
import Layout from "./Layout";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          {/* Aquí puedes agregar más rutas anidadas si es necesario */}
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<About />} />
          {/* <Route path="/proyectos" element={<Projects />} /> */}
          {/* <Route path="/contacto" element={<Contact />} /> */}
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
