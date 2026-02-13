import { Link } from "react-router-dom";
import LogoImage from "../../assets/img/Logo.png";

function Logo() {
  return (
    <Link to="/">
      <img src={LogoImage} alt="logo" className="h-6 w-auto" />
    </Link>
  );
}
export default Logo;
