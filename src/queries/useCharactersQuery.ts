// React Query hook for fetching characters data with images
import { useQuery } from "@tanstack/react-query";
import charactersAPI from "../api/charactersAPI";
import { CHARACTERS_KEYS } from "../constans";
import { useMemo } from "react";

// useCharactersQuery hook - fetches characters and their images, then merges them
const useCharactersQuery = (page: number) => {
  // Fetch characters images mapping (id -> image URL)
  const {
    data: imagesData,
    isLoading: imagesLoading,
    error: imagesError,
  } = useQuery({
    queryKey: [CHARACTERS_KEYS.IMAGES],
    queryFn: () => charactersAPI.getCharactersImages(),
  });

  // Fetch characters data for specified page
  const {
    data: charactersData,
    isLoading: charactersLoading,
    error: charactersError,
  } = useQuery({
    queryKey: [CHARACTERS_KEYS.ALL, page],
    queryFn: () => charactersAPI.getCharacters(page),
  });

  // Merge characters with their images by matching IDs
  const characterWithImage = useMemo(
    () =>
      charactersData?.results.map((character) => ({
        ...character,
        // Find matching image for this character or use empty string
        image:
          imagesData?.find((image) => image.id === character.id)?.image || "",
      })),
    [charactersData, imagesData]
  );

  return {
    data: characterWithImage,
    // Total count of all characters (for pagination)
    count: charactersData?.count,
    // Loading if either images or characters are loading
    isLoading: imagesLoading || charactersLoading,
    // Error if both queries have errors
    error: imagesError && charactersError,
  };
};

export default useCharactersQuery;
