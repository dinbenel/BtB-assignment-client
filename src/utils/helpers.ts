import { SearchFormState } from "@/validations/searchCharacterValidation";

export const getSearchParamsFromState = (state?: SearchFormState) => {
  const params = new URLSearchParams();
  if (!state) return;
  Object.entries(state).forEach(([key, value]) => {
    if (value) {
      params.set(key, value);
    }
  });

  return params.toString();
};
