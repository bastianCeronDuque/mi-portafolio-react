import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import About from '../pages/About';
// import Projects from '../pages/Projects';
// import Contact from '../pages/Contact';


export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<About />} />
        {/* <Route path="/proyectos" element={<Projects />} /> */}
        {/* <Route path="/contacto" element={<Contact />} /> */}
      </Routes>
    </AnimatePresence>
  );
}
