import { useLocationStore } from "@/store/location.store";
import { useEffect } from "react";
import LocationCard from "./LocationCard.component";

const LocationList = () => {
  const { locations, getAll, isLoading } = useLocationStore((state) => ({
    getAll: state.getAllLocations,
    locations: state.locations,
    isLoading: state.isLoading,
  }));

  useEffect(() => {
    getAll();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="grid grid-cols-1 xs:grid-cols-2 justify-items-center md:grid-cols-3 lg:grid-cols-4 gap-2 md:max-h-[calc(100vh-350px)] lg:max-h-[calc(100vh-300px)] max-h-[calc(100vh-160px)] p-2 overflow-y-auto">
      {locations?.map((l) => {
        return <LocationCard key={l.created + l.id} location={l} />;
      })}
    </section>
  );
};

export default LocationList;
