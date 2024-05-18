import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { ICharacter } from "@/types/character.type";
import { cn } from "@/utils/style";
import { FC } from "react";

type Props = {
  char: ICharacter;
};

const CharacterCard: FC<Props> = ({ char }) => {
  return (
    <Card className="w-fit rounded-md">
      <CardHeader className="p-0">
        <img src={char.image} alt="character image" className="w-full" />
      </CardHeader>
      <CardContent className={cn(char.type ? "p-1" : "p-2")}>
        <CardTitle>{char.name}</CardTitle>
        <CardDescription>{`${char.gender} - ${char.status}`}</CardDescription>
        <p>{`${char.type}`}</p>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
