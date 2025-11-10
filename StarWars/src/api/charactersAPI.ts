import { api } from "./base";
import type {
  ICharactersResponse,
  IFilmsResponse,
  IStarshipsResponse,
} from "./types";

const charactersAPI = {
  getCharacters: async (page: number): Promise<ICharactersResponse> => {
    const response = await api.get<ICharactersResponse>(`/people`, {
      params: {
        page,
      },
    });
    return response.data;
  },

  getFilms: async (): Promise<IFilmsResponse> => {
    const response = await api.get<IFilmsResponse>(`/films`);
    return response.data;
  },

  getStarships: async (): Promise<IStarshipsResponse> => {
    const response = await api.get<IStarshipsResponse>(`/starships`);
    return response.data;
  },
};

export default charactersAPI;
