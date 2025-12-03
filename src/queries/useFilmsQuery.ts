// React Query hook for fetching films data (supports filters)
import { useQuery } from "@tanstack/react-query";
import charactersAPI from "../api/charactersAPI";
import { CHARACTERS_KEYS } from "../constans";

type UseFilmsOptions = {
  enabled?: boolean;
};

// useFilmsQuery hook - fetches Star Wars films with optional filter params
const useFilmsQuery = (
  params: Record<string, string | number> = {},
  options: UseFilmsOptions = {}
) => {
  const { enabled = true } = options;

  return useQuery({
    queryKey: [CHARACTERS_KEYS.FILMS, params],
    queryFn: () => charactersAPI.getFilms(params),
    enabled,
  });
};

export default useFilmsQuery;
