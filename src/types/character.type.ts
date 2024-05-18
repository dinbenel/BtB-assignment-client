export interface IApiRes {
  info: IResInfo;
  results: ICharacter[];
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}

export interface IResInfo {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}
