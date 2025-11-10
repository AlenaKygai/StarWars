import { useQuery } from "@tanstack/react-query";
import charactersAPI from "../api/charactersAPI";
import { CHARACTERS_KEYS } from "../constans";

const useFilmsQuery = () => {
  return useQuery({
    queryKey: [CHARACTERS_KEYS.FILMS],
    queryFn: () => charactersAPI.getFilms(),
  });
};

export default useFilmsQuery;
