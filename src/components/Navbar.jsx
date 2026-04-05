import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <p className="navbar-brand">Lucas Macedo Dev</p>
        <div className="navbar-links">
          <a href="#inicio">Início</a>
          <a href="#case">Case</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </div>
      </div>
    </nav>
  );
}
