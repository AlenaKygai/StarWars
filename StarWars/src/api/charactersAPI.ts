import { api, apiImages } from "./base";
import { fetchAllPages } from "./utils";
import type {
  ICharacterImage,
  ICharactersResponse,
  IFilm,
  IStarship,
} from "./types";

const charactersAPI = {
  getCharactersImages: async (): Promise<ICharacterImage[]> => {
    const response = await apiImages.get<ICharacterImage[]>(`/all.json`);
    return response.data;
  },

  getCharacters: async (page: number): Promise<ICharactersResponse> => {
    const response = await api.get<ICharactersResponse>(`/people`, {
      params: {
        page,
      },
    });
    return response.data;
  },

  getFilms: async (): Promise<IFilm[]> => {
    const response = await fetchAllPages<IFilm>(`/films`);
    return response;
  },

  getStarships: async (): Promise<IStarship[]> => {
    const response = await fetchAllPages<IStarship>(`/starships`);
    return response;
  },
};

export default charactersAPI;
