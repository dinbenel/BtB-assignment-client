import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import CharacterSearchForm from "./CharacterSearchForm.component";
import { useCharacterStore } from "@/store/character.store";
import { characterPageStr } from "@/constants/stringRes";

const CharacterSearchDialog = () => {
  const { isOpen, setIsOpen } = useCharacterStore((state) => ({
    isOpen: state.isDialogOpen,
    setIsOpen: state.setDialogOpen,
  }));
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[50%]">
        <DialogHeader>
          <DialogTitle className="capitalize">
            {characterPageStr.dialogTitle}
          </DialogTitle>
          <DialogDescription>
            {characterPageStr.dialogSubTitle}
          </DialogDescription>
        </DialogHeader>
        <CharacterSearchForm />
      </DialogContent>
    </Dialog>
  );
};

export default CharacterSearchDialog;
