import { useQuery } from "@tanstack/react-query";
import charactersAPI from "../api/charactersAPI";
import { CHARACTERS_KEYS } from "../constans";
import { useMemo } from "react";

const useCharactersQuery = (page: number) => {
  const {
    data: imagesData,
    isLoading: imagesLoading,
    error: imagesError,
  } = useQuery({
    queryKey: [CHARACTERS_KEYS.IMAGES],
    queryFn: () => charactersAPI.getCharactersImages(),
  });

  const {
    data: charactersData,
    isLoading: charactersLoading,
    error: charactersError,
  } = useQuery({
    queryKey: [CHARACTERS_KEYS.ALL, page],
    queryFn: () => charactersAPI.getCharacters(page),
  });

  const characterWithImage = useMemo(
    () =>
      charactersData?.results.map((character) => ({
        ...character,
        image:
          imagesData?.find((image) => image.id === character.id)?.image || "",
      })),
    [charactersData, imagesData]
  );

  return {
    data: characterWithImage,
    count: charactersData?.count,
    isLoading: imagesLoading || charactersLoading,
    error: imagesError && charactersError,
  };
};

export default useCharactersQuery;
