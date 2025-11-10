import { useState, useMemo, useCallback } from "react";
import useCharactersQuery from "../queries/useCharactersQuery";
import useStarshipsQuery from "../queries/useStarshipsQuery";
import useFilmsQuery from "../queries/useFilmsQuery";
import type { ICharacter, ICharactersResponse } from "../api/types";
import { PAGE_SIZE } from "../constans";

type TUseCharactersListReturn = {
  data?: ICharactersResponse;
  isLoading: boolean;
  error: Error | null;
  pageCount: number;
  handleShowDetails: (character: ICharacter) => void;
  handlePageClick: (event: TPagination) => void;
};

type TPagination = {
  selected: number;
};

const useCharactersList = (): TUseCharactersListReturn => {
  const [page, setPage] = useState<number>(1);

  const {
    data: dataCharacters,
    isLoading: isLoadingCharacters,
    error: errorCharacters,
  } = useCharactersQuery(page);

  const {
    data: dataFilms,
    isLoading: isLoadingFilms,
    error: errorFilms,
  } = useFilmsQuery();

  const {
    data: dataStarships,
    isLoading: isLoadingStarships,
    error: errorStarships,
  } = useStarshipsQuery();

  console.log("dataFilms", dataFilms);

  console.log("dataStarShips", dataStarships);

  const pageCount = useMemo(
    () => Math.ceil((dataCharacters?.count || 0) / PAGE_SIZE),
    [dataCharacters?.count]
  );

  const handlePageClick = useCallback(({ selected }: TPagination) => {
    setPage(selected + 1);
  }, []);

  const handleShowDetails = useCallback((character: ICharacter) => {
    console.log("Selected character", character);
  }, []);

  return {
    data: dataCharacters,
    isLoading: isLoadingCharacters && isLoadingFilms && isLoadingStarships,
    error: errorCharacters || errorFilms || errorStarships,
    pageCount,
    handleShowDetails,
    handlePageClick,
  };
};

export default useCharactersList;
