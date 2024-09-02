import Logo from '../assets/Logo.svg'
import "../App.css"

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navigation">
    <nav>
      <ul>
        <li>
          <img src={Logo} alt="logo" className="logo" />
        </li>
        <li>
          <Link to="/">Kanji</Link>
        </li>
        <li>
          <Link to="/HiraganaPage">Hiragana</Link>
        </li>
        <li>
          <Link to='/KatakanaPage'>Katakana</Link>
        </li>
      </ul>
      <p className="made-by">
        Made by <br></br>Sunny Leone ❤️{" "}
      </p>
    </nav>
  </header>
  );
};

export default NavBar;
