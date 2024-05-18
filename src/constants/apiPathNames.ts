export const authApiPath = {
  login: "/auth/login",
  userData: "/auth/logged-user",
} as const;

export const dataApiPath = {
  characters: "/character",
  locations: "/location",
  episodes: "/episode",
} as const;
