import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="Logo">
      <span className="Logo__Title">
        Cort<strong>X</strong>
      </span>
    </Link>
  );
};
export default Logo;