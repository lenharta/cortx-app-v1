import { Link } from "react-router-dom";
import Logo from "../links/Logo";

const Header = () => {
  return (
    <header className="Header">
      <nav className="Header__nav">
        <Logo />
      </nav>
    </header>
  );
};
export default Header;
