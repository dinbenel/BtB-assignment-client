import { locationPageStr } from "@/constants/stringRes";
import LoadingSpinner from "@/shared/LoadingSpinner/LoadingSpinner.component";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import { useLocationStore } from "@/store/location.store";
import ResidentsList from "./ResidentsList.component";

const LocationResidentsDialog = () => {
  const { isOpen, setIsOpen, isLoading, residents } = useLocationStore(
    (state) => ({
      isOpen: state.isModalOpen,
      setIsOpen: state.setIsModalOpen,
      getResidents: state.getLocationResidents,
      isLoading: state.isLoadingDialog,
      residents: state.residents,
    })
  );

  if (!residents.length) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[70%] mt-4 p-2">
        <DialogHeader>
          <DialogTitle className="capitalize">
            {locationPageStr.dialogTitle}
          </DialogTitle>

          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <ResidentsList residents={residents} />
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LocationResidentsDialog;
