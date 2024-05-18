import {
  SearchFormState,
  SearchCharacterValidationSchema,
} from "@/validations/searchCharacterValidation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shared/ui/button";
import { characterPageStr } from "@/constants/stringRes";
import FormTextInput from "@/shared/FormTextInput/FormTextInput.component";
import FormSelectInput from "@/shared/FormSelectInput/FormSelectInput.component";
import { cn } from "@/utils/style";
import { useCharacterStore } from "@/store/character.store";

const CharacterSearch = () => {
  const getAllCharacters = useCharacterStore((state) => state.getAllCharacters);
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SearchFormState>({
    resolver: zodResolver(SearchCharacterValidationSchema),
    defaultValues: {
      gender: "",
      name: "",
      species: "",
      status: "",
      type: "",
    },
  });

  const onSearch: SubmitHandler<SearchFormState> = async (formState) => {
    await getAllCharacters(formState);
    reset();
  };

  return (
    <div className="grid">
      <form
        className={cn(
          "grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 grid-rows-2 items-center gap-2 w-4/6 justify-self-center py-4"
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

        <Button className="">{characterPageStr.search}</Button>
      </form>
    </div>
  );
};

export default CharacterSearch;
