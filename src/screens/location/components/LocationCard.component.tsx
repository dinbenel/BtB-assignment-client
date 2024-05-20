import { locationPageStr } from "@/constants/stringRes";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { useLocationStore } from "@/store/location.store";
import { ILocation } from "@/types/location.type";
import { FC } from "react";

type Props = {
  location: ILocation;
};
const LocationCard: FC<Props> = ({ location }) => {
  const { setSelected, setModalOpen } = useLocationStore((state) => ({
    setSelected: state.getLocationResidents,
    setModalOpen: state.setIsModalOpen,
  }));

  const handleSelect = () => {
    setSelected(location);
    setModalOpen(true);
  };

  return (
    <Card className="w-fit rounded-md grid p-2 gap-2">
      <CardHeader className="p-0">
        <CardTitle>{location.name}</CardTitle>
        <p>{`${locationPageStr.created} - ${new Date(
          location.created
        ).toLocaleString()}`}</p>
      </CardHeader>
      <CardContent className="p-0 grid">
        <CardDescription>{`${location.type} - ${location.dimension}`}</CardDescription>
        <p>{`${locationPageStr.dialogTitle} - ${location.residents.length}`}</p>
      </CardContent>
      <CardFooter className="p-0 justify-self-center">
        <Button className="bg-accent hover:bg-accent/60" onClick={handleSelect}>
          {locationPageStr.viewResidents}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LocationCard;
