import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimateRoutes from "./components/AnimateRoutes";

export default function App() {
  return (
    <Router>
      <AnimateRoutes />
    </Router>
  );
}
