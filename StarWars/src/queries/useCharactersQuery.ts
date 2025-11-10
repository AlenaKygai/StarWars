import { useQuery } from "@tanstack/react-query";
import charactersAPI from "../api/charactersAPI";

const useCharactersQuery = (page: number) => {
  return useQuery({
    queryKey: ["characters", page],
    queryFn: () => charactersAPI.getCharacters(page),
  });
};

export default useCharactersQuery;
