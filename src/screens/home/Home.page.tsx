import { routeNames } from "@/constants/routeNames";
import { homePageStr } from "@/constants/stringRes";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="grid justify-center pt-10 gap-4">
      <div className="flex flex-col">
        <h2 className="font-bold text-xl capitalize">{homePageStr.title}</h2>
        <p className="font-light text-lg">{homePageStr.subTitle}</p>
      </div>
      <div className="flex gap-4 justify-center">
        <Link className="text-accent underline" to={routeNames.characters}>
          {homePageStr.characterLink}
        </Link>
        <Link className="text-secondary underline" to={routeNames.location}>
          {homePageStr.locationLink}
        </Link>
      </div>
    </section>
  );
};

export default Home;
