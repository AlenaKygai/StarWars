import { useQuery } from "@tanstack/react-query";
import charactersAPI from "../api/charactersAPI";
import { CHARACTERS_KEYS } from "../constans";

const useStarshipsQuery = () => {
  return useQuery({
    queryKey: [CHARACTERS_KEYS.STARSHIPS],
    queryFn: () => charactersAPI.getStarships(),
  });
};

export default useStarshipsQuery;
