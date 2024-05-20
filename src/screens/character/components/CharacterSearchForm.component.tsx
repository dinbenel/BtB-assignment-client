import { characterPageStr } from "@/constants/stringRes";
import FormSelectInput from "@/shared/FormSelectInput/FormSelectInput.component";
import FormTextInput from "@/shared/FormTextInput/FormTextInput.component";
import { Button } from "@/shared/ui/button";
import { useCharacterStore } from "@/store/character.store";
import { getSearchParamsFromState } from "@/utils/helpers";
import { cn } from "@/utils/style";
import { SearchFormState } from "@/validations/searchCharacterValidation";
import { Controller, SubmitHandler, useFormContext } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

const CharacterSearchForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    control,
    reset,
    formState: { errors },
    handleSubmit,
  } = useFormContext<SearchFormState>();
  const { getAllCharacters, setDialogOpen, resetFiltered } = useCharacterStore(
    (state) => ({
      getAllCharacters: state.getAllCharacters,
      setDialogOpen: state.setDialogOpen,
      resetFiltered: state.resetFiltered,
    })
  );

  const onSearch: SubmitHandler<SearchFormState> = async (formState) => {
    const params = getSearchParamsFromState(formState);
    await getAllCharacters(params);
    navigate(`?${params}`);
    setDialogOpen(false);
  };

  const onResetForm = async () => {
    await getAllCharacters();
    reset();
    navigate(location.pathname);
    resetFiltered();
  };

  return (
    <div className="grid">
      <form
        className={cn(
          "grid lg:grid-cols-3 md:grid-cols-2 grid-rows-2 items-center gap-2 w-full md:w-4/6 justify-self-center py-4"
        )}
        onSubmit={handleSubmit(onSearch)}
      >
        <Controller
          control={control}
          name="name"
          render={({ field }) => {
            return (
              <FormTextInput
                className="ring-transparent"
                label={characterPageStr.name}
                error={errors[field.name]?.message}
                {...field}
              />
            );
          }}
        />
        <Controller
          control={control}
          name="species"
          render={({ field }) => {
            return (
              <FormTextInput
                className="ring-transparent"
                label={characterPageStr.species}
                error={errors[field.name]?.message}
                {...field}
              />
            );
          }}
        />
        <Controller
          control={control}
          name="type"
          render={({ field }) => {
            return (
              <FormTextInput
                className="ring-transparent"
                label={characterPageStr.type}
                error={errors[field.name]?.message}
                {...field}
              />
            );
          }}
        />
        <Controller
          control={control}
          name="gender"
          render={({ field }) => {
            return (
              <FormSelectInput
                label={characterPageStr.gender}
                onChange={field.onChange}
                values={["female", "male", "genderless", "unknown"]}
                selected={field.value}
              />
            );
          }}
        />
        <Controller
          control={control}
          name="status"
          render={({ field }) => {
            return (
              <FormSelectInput
                label={characterPageStr.status}
                onChange={field.onChange}
                values={["alive", "dead", "unknown"]}
                selected={field.value}
              />
            );
          }}
        />
        <div className="flex gap-2 w-full justify-between">
          <Button
            className="bg-accent hover:bg-accent/50 flex-grow"
            type="submit"
          >
            {characterPageStr.search}
          </Button>
          <Button
            className="flex-grow bg-secondary hover:bg-secondary/50"
            type="button"
            onClick={onResetForm}
          >
            {characterPageStr.reset}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CharacterSearchForm;
