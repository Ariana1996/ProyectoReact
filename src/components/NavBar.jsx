import { Link } from "react-router-dom";
import "../assets/css/style.css"

import CardWidget from "./CartWidget"

function NavBar() {
  return (
    <nav>
      <ul className="nav-menu">
        <h1>
          <li className="nav-tittle">
            <Link className="nav-link" to="/">
              Michi's Restaurant
            </Link>
          </li>
        </h1>
        <li className="nav-item">
          <Link className="nav-link" to="/category/salmon">
            Salmón
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/pescado">
            Pescado
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/langostinos">
            Langostinos
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/fideosArroz">
            Fideos y arroz
          </Link>
        </li>
        <CardWidget>
        </CardWidget>
      </ul>
    </nav>
  );
}

export default NavBar;