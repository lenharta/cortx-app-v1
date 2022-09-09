import { Link } from "react-router-dom";
import Icons from "../assets/Icons";

const PrimaryLink = ({ url, variant, title, onClick }) => {
  return (
    <Link to={url} className={`PrimaryLink__${variant}`} onClick={onClick}>
      <Icons name={title} />
      <span>{title}</span>
    </Link>
  );
};
export default PrimaryLink;
