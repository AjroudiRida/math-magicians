import { Link } from 'react-router-dom';
import './menu.css';

export default function Menu() {
  return (
    <header className="header">
      <nav className="nav">
        <Link className="logo" to="/">
          Math Magicians
        </Link>
        <ul className="menu">
          <li className="menu_item">
            <Link className="link_item" to="/">
              Home
            </Link>
          </li>
          <li className="menu_item">
            <Link className="link_item" to="/calculator">
              Calculator
            </Link>
          </li>
          <li className="menu_item">
            <Link className="link_item" to="/quote">
              Quotes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
