// API service for Star Wars characters, films, and starships
import { api, apiImages } from "./base";
import { fetchAllPages } from "./utils";
import type {
  ICharacterImage,
  ICharactersResponse,
  IFilm,
  IStarship,
} from "./types";

// charactersAPI - API service object with methods for fetching Star Wars data
const charactersAPI = {
  // Fetches mapping of character IDs to image URLs
  getCharactersImages: async (): Promise<ICharacterImage[]> => {
    const response = await apiImages.get<ICharacterImage[]>(`/all.json`);
    return response.data;
  },

  // Fetches paginated characters data
  getCharacters: async (page: number): Promise<ICharactersResponse> => {
    const response = await api.get<ICharactersResponse>(`/people`, {
      params: {
        page,
      },
    });
    return response.data;
  },

  // Fetches all films data (handles pagination automatically)
  getFilms: async (): Promise<IFilm[]> => {
    const response = await fetchAllPages<IFilm>(`/films`);
    return response;
  },

  // Fetches all starships data (handles pagination automatically)
  getStarships: async (): Promise<IStarship[]> => {
    const response = await fetchAllPages<IStarship>(`/starships`);
    return response;
  },
};

export default charactersAPI;
