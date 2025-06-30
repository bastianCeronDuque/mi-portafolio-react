import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const location = useLocation(); //sabremos en que ruta estamos

  return (
    <nav className="navbar">
      <div className="logo">Bastian 🚀</div>
      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Inicio</Link>
        </li>
        <li className={location.pathname === "sobre-mi" ? "active" : ""}>
          <Link to="/sobre-mi">Sobre mí</Link>
        </li>
        <li className={location.pathname === "/proyectos" ? "active" : ""}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("¡Esta sección aún está en construcción! 🚧");
            }}
            style={{ opacity: 0.5, cursor: "not-allowed" }}
          >
            Proyectos
          </a>
          {/* <Link to='/proyectos'>Proyectos</Link> */}
        </li>
        <li className={location.pathname === "/contacto" ? "active" : ""}>
          <Link to='/contacto'>Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
