import { Link } from "react-router-dom";
import { routeNames } from "../../constants/routeNames";

const Header = () => {
  return (
    <header className="w-full bg-primary p-4 text-primary-foreground">
      <nav className="w-full flex items-center justify-center gap-4 capitalize">
        <Link to={routeNames.home}>home</Link>
        <Link to={routeNames.login}>login</Link>
      </nav>
    </header>
  );
};

export default Header;
