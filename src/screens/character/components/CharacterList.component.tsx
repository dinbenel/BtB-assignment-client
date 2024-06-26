import { useCharacterStore } from "@/store/character.store";
import { useEffect } from "react";
import CharacterCard from "./CharacterCard.component";
import SkeletonLoader from "./SkeletonLoader.component";

const CharacterList = () => {
  const { chars, getAll, isLoading, filtered } = useCharacterStore((state) => ({
    getAll: state.getAllCharacters,
    chars: state.characters,
    isLoading: state.isLoading,
    filtered: state.filteredCharacters,
  }));

  useEffect(() => {
    getAll();
  }, []);

  if (isLoading) return <SkeletonLoader />;

  return (
    <section className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-2 md:max-h-[calc(100vh-350px)] lg:max-h-[calc(100vh-300px)] max-h-[calc(100vh-160px)] p-2 overflow-y-auto">
      {(filtered.length ? filtered : chars)?.map((c) => {
        return <CharacterCard key={c.created + c.id} char={c} />;
      })}
    </section>
  );
};

export default CharacterList;
