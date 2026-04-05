import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <p className="navbar-brand">Lucas Macedo Dev</p>
        <div className="navbar-links">
          <NavLink to="/" end>
            Início
          </NavLink>
          <a href="#case">Case</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </div>
      </div>
    </nav>
  );
}
