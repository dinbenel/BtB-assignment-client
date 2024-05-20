import LocationList from "./components/LocationList.component";
import LocationPagination from "./components/LocationPagination.component";
import LocationResidentsDialog from "./components/LocationResidentsDialog.component";

const Location = () => {
  return (
    <div className="flex-grow flex flex-col">
      <LocationList />
      <LocationPagination />
      <LocationResidentsDialog />
    </div>
  );
};

export default Location;
