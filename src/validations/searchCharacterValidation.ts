import { z } from "zod";

export const SearchCharacterValidationSchema = z.object({
  name: z.string(),
  status: z.string(),
  gender: z.string(),
  type: z.string(),
  species: z.string(),
});

export type SearchFormState = z.infer<typeof SearchCharacterValidationSchema>;
