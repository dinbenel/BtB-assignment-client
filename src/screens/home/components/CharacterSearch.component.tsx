import {
  SearchCharacterValidationSchema,
  SearchFormState,
} from "@/validations/searchCharacterValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import CharacterSearchForm from "./CharacterSearchForm.component";
import CharacterSearchDialog from "./CharacterSearchDialog.component";
import { Button } from "@/shared/ui/button";
import { useCharacterStore } from "@/store/character.store";

const CharacterSearch = () => {
  const setDialogOpen = useCharacterStore((state) => state.setDialogOpen);
  const formMethods = useForm<SearchFormState>({
    resolver: zodResolver(SearchCharacterValidationSchema),
    defaultValues: {
      gender: "",
      name: "",
      species: "",
      status: "",
      type: "",
    },
  });

  return (
    <FormProvider {...formMethods}>
      <div className="hidden md:block">
        <CharacterSearchForm />
      </div>
      <Button
        onClick={() => setDialogOpen(true)}
        className="md:hidden w-1/2 bg-accent my-2 justify-self-center font-bold"
      >
        open search
      </Button>
      <CharacterSearchDialog />
    </FormProvider>
  );
};

export default CharacterSearch;
