import { useLocationStore } from "@/store/location.store";
import { useEffect } from "react";
import LocationCard from "./LocationCard.component";

const LocationList = () => {
  const { locations, getAll, isLoading, filtered } = useLocationStore(
    (state) => ({
      getAll: state.getAllLocations,
      locations: state.locations,
      isLoading: state.isLoading,
      filtered: state.filteredLocations,
    })
  );

  useEffect(() => {
    getAll();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="flex-grow grid grid-cols-1 xs:grid-cols-2 justify-items-center md:grid-cols-3 lg:grid-cols-4 gap-2 md:max-h-[calc(100vh-130px)] max-h-[calc(100vh-110px)] p-2 overflow-y-auto">
      {(filtered.length ? filtered : locations)?.map((l) => {
        return <LocationCard key={l.created + l.id} location={l} />;
      })}
    </section>
  );
};

export default LocationList;
