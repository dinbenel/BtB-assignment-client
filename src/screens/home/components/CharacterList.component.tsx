import { useCharacterStore } from "@/store/character.store";
import { useEffect } from "react";
import CharacterCard from "./CharacterCard.component";

const CharacterList = () => {
  const { chars, getAll, isLoading } = useCharacterStore((state) => ({
    getAll: state.getAllCharacters,
    chars: state.characters,
    isLoading: state.isLoading,
  }));

  useEffect(() => {
    getAll();
  }, []);

  if (isLoading) return <p> Loading.....</p>;

  return (
    <section className="grid grid-cols-3 gap-2 md:max-h-[calc(100vh-350px)] lg:max-h-[calc(100vh-300px)] sm:max-h-[calc(100vh-510px)] p-2 overflow-y-auto">
      {chars.map((c) => {
        return <CharacterCard key={c.created + c.id} char={c} />;
      })}
    </section>
  );
};

export default CharacterList;
