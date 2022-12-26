import "../assets/css/style.css"

import CardWidget from "./CartWidget"

function NavBar() {
  return (
    <>
      <nav>
        <ul className="nav-menu">
          <h1>
            <li className="nav-tittle">
              Michi's Restaurant
            </li>
          </h1>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Entradas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Platos principales
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Postres
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Bebidas
            </a>
          </li>
          <CardWidget>
          </CardWidget>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;