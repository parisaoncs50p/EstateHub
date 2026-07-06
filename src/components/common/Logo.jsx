
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center"
    >
      <img
        src={logo}
        alt="EstateHub"
        className="h-14 w-auto object-contain transition hover:scale-105"
      />
    </Link>
  );
}

export default Logo;