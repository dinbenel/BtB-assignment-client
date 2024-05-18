import SideMenu from "@/shared/SideMenu/SideMenu.component";
import CharacterSearch from "./components/CharacterSearch.component";
import CharacterList from "./components/CharacterList.component";
import CharacterPagination from "./components/CharacterPagination.component";

const Home = () => {
  return (
    <section className="max-h-full grid">
      <CharacterSearch />
      <CharacterList />
      <CharacterPagination />
      <SideMenu />
    </section>
  );
};

export default Home;
