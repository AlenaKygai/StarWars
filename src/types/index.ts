// Custom type definitions for the application
import type { ICharacter, IFilm, IStarship } from "../api/types";

// Type for pagination event from react-paginate
export type TPagination = {
  selected: number; // Zero-based index of selected page
};

// Extended character type with enriched film and starship data
// Instead of just IDs, contains full film and starship objects
export type TModifiedCharacter = {
  films: IFilm[]; // Array of full film objects (not just IDs)
  starships: IStarship[]; // Array of full starship objects (not just IDs)
} & ICharacter;
