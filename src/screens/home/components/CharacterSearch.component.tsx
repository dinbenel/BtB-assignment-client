import { Button } from "@/shared/ui/button";
import { useCharacterStore } from "@/store/character.store";
import {
  SearchCharacterValidationSchema,
  SearchFormState,
} from "@/validations/searchCharacterValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import CharacterSearchDialog from "./CharacterSearchDialog.component";
import CharacterSearchForm from "./CharacterSearchForm.component";

const CharacterSearch = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const setDialogOpen = useCharacterStore((state) => state.setDialogOpen);
  const formMethods = useForm<SearchFormState>({
    resolver: zodResolver(SearchCharacterValidationSchema),
    defaultValues: {
      gender: params.get("gender") || "",
      name: params.get("name") || "",
      species: params.get("species") || "",
      status: params.get("status") || "",
      type: params.get("type") || "",
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
