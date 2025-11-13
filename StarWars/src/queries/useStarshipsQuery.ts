// React Query hook for fetching all starships data
import { useQuery } from "@tanstack/react-query";
import charactersAPI from "../api/charactersAPI";
import { CHARACTERS_KEYS } from "../constans";

// useStarshipsQuery hook - fetches all Star Wars starships
const useStarshipsQuery = () => {
  return useQuery({
    queryKey: [CHARACTERS_KEYS.STARSHIPS],
    queryFn: () => charactersAPI.getStarships(),
  });
};

export default useStarshipsQuery;
