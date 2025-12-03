// API service for Star Wars characters, films, and starships
import { api, apiImages } from "./base";
import type {
  ICharacterImage,
  ICharactersResponse,
  IFilm,
  IStarship,
  IFilmsResponse,
  IStarshipsResponse,
  ICharacter,
} from "./types";

// charactersAPI - API service object with methods for fetching Star Wars data
const charactersAPI = {
  // Fetches mapping of character IDs to image URLs
  getCharactersImages: async (): Promise<ICharacterImage[]> => {
    const response = await apiImages.get<ICharacterImage[]>(`/all.json`);
    return response.data;
  },

  // Fetches paginated characters data (supports API filters)
  getCharacters: async (page: number): Promise<ICharactersResponse> => {
    const response = await api.get<ICharactersResponse>(`/people/`, {
      params: {
        page,
      },
    });
    return response.data;
  },

  // Fetch single character by ID
  getCharacterById: async (id: number): Promise<ICharacter> => {
    const response = await api.get<ICharacter>(`/people/${id}/`);
    return response.data;
  },

  // Fetches films data (supports API filters)
  getFilms: async (
    params: Record<string, string | number> = {}
  ): Promise<IFilm[]> => {
    const response = await api.get<IFilmsResponse>(`/films/`, {
      params,
    });
    return response.data.results;
  },

  // Fetches starships data (supports API filters)
  getStarships: async (
    params: Record<string, string | number> = {}
  ): Promise<IStarship[]> => {
    const response = await api.get<IStarshipsResponse>(`/starships/`, {
      params,
    });
    return response.data.results;
  },
};

export default charactersAPI;
