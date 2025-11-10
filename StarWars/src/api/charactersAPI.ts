import { api } from "./base";

const charactersAPI = {
  getCharacters: async (page: number) => {
    const response = await api.get(`/people`, {
      params: {
        page,
      },
    });
    return response.data;
  },
};

export default charactersAPI;