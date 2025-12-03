// React Query hook for fetching starships data (supports filters)
import { useQuery } from "@tanstack/react-query";
import charactersAPI from "../api/charactersAPI";
import { CHARACTERS_KEYS } from "../constans";

type UseStarshipsOptions = {
  enabled?: boolean;
};

// useStarshipsQuery hook - fetches Star Wars starships with optional filter params
const useStarshipsQuery = (
  params: Record<string, string | number> = {},
  options: UseStarshipsOptions = {}
) => {
  const { enabled = true } = options;

  return useQuery({
    queryKey: [CHARACTERS_KEYS.STARSHIPS, params],
    queryFn: () => charactersAPI.getStarships(params),
    enabled,
  });
};

export default useStarshipsQuery;
