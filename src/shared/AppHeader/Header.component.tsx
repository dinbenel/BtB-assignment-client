import { headerStr } from "@/constants/stringRes";
import { Link } from "react-router-dom";
import { routeNames } from "../../constants/routeNames";
import UserMenu from "./components/UserMenu.component";
import UserMobileMenu from "./components/UserMobileMenu.component";

const Header = () => {
  return (
    <header className="w-full bg-primary py-4 text-primary-foreground">
      <nav className="w-full flex items-center justify-between gap-4 capitalize container">
        <section>
          <Link to={routeNames.home}>
            <h2 className="tracking-widest cursor-pointer">
              {headerStr.title}
            </h2>
          </Link>
        </section>
        <section className="hidden md:block">
          <UserMenu />
        </section>
        <section className=" md:hidden">
          <UserMobileMenu />
        </section>
      </nav>
    </header>
  );
};

export default Header;
