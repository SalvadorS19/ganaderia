import "./nav.css";

export default function Nav() {
  return (
    <header className="layout-header">
        <div className="container">
            <nav className="navbar">
                <h1 className="navbar-logo">El Ganado Feliz</h1>
                <div className="navbar-container">             
                    <ul className="navbar-items">
                        <li className="navbar-item">
                            <a className="navbar-item-link active" href="#">
                                Inicio
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a className="navbar-item-link" href="#">
                                Nosotros
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a className="navbar-item-link" href="#">
                                Servicios
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a className="navbar-item-link" href="#">
                                Contactanos
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
  );
}
