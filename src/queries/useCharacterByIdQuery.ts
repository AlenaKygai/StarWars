// React Query hook for fetching single character by ID
import { useQuery } from "@tanstack/react-query";
import charactersAPI from "../api/charactersAPI";
import { CHARACTERS_KEYS } from "../constans";
import type { ICharacter } from "../api/types";

type UseCharacterByIdParams = {
  id?: string;
  enabled?: boolean;
};

const useCharacterByIdQuery = ({ id, enabled = true }: UseCharacterByIdParams) => {
  return useQuery<ICharacter | undefined>({
    queryKey: [CHARACTERS_KEYS.ALL, "byId", id],
    queryFn: () =>
      id ? charactersAPI.getCharacterById(Number(id)) : Promise.resolve(undefined),
    enabled: !!id && enabled,
  });
};

export default useCharacterByIdQuery;


