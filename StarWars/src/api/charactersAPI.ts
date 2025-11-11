import { api } from "./base";
import { fetchAllPages } from "./utils";
import type { ICharactersResponse, IFilm, IStarship } from "./types";

const charactersAPI = {
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
