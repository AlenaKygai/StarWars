import type { ICharacter, IFilm, IStarship } from "../api/types";

export type TPagination = {
  selected: number;
};

export type TModifiedCharacter = {
  films: IFilm[];
  starships: IStarship[];
} & ICharacter;
