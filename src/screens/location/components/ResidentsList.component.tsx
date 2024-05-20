import { ICharacter } from "@/types/character.type";
import { FC } from "react";
import NoResidents from "./NoResidents.component";
import CharacterCard from "@/screens/character/components/CharacterCard.component";

type Props = {
  residents: ICharacter[];
};

const ResidentsList: FC<Props> = ({ residents }) => {
  if (!residents.length) return <NoResidents />;
  return (
    <section className="grid grid-cols-4 gap-2 overflow-auto max-h-[800px] ">
      {residents.map((r) => (
        <CharacterCard char={r} key={`${Date.now()}-${r.id}`} />
      ))}
    </section>
  );
};

export default ResidentsList;
