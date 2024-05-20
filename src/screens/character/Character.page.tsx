import CharacterList from "./components/CharacterList.component";
import CharacterPagination from "./components/CharacterPagination.component";
import CharacterSearch from "./components/CharacterSearch.component";

const Character = () => {
  return (
    <section className="max-h-full grid">
      <CharacterSearch />
      <CharacterList />
      <CharacterPagination />
    </section>
  );
};

export default Character;
