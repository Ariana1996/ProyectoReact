import "../assets/css/style.css"

function NavBar() {
  return (
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

        <a className="nav-link" href="/">🛒</a>
        
      </ul>
    </nav>
  );
}

export default NavBar;