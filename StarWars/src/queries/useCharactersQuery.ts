import { useQuery } from "@tanstack/react-query";
import charactersAPI from "../api/charactersAPI";
import { CHARACTERS_KEYS } from "../constans";

const useCharactersQuery = (page: number) => {
  return useQuery({
    queryKey: [CHARACTERS_KEYS.ALL, page],
    queryFn: () => charactersAPI.getCharacters(page),
  });
};

export default useCharactersQuery;
