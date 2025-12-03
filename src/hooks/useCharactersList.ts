// Custom hook for managing characters list state and pagination
import { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useCharactersQuery from "../queries/useCharactersQuery";
import type { ICharacter } from "../api/types";
import type { TPagination } from "../types";
import { PAGE_SIZE } from "../constans";

// Return type interface for useCharactersList hook
type TUseCharactersListReturn = {
  data?: ICharacter[];
  isLoading: boolean;
  error: Error | null;
  pageCount: number;
  handleShowDetails: (character: ICharacter) => void;
  handlePageClick: (event: TPagination) => void;
};

// useCharactersList hook - manages characters list state, pagination, and modal operations
const useCharactersList = (): TUseCharactersListReturn => {
  const navigate = useNavigate();
  // Current page number for pagination
  const [page, setPage] = useState<number>(1);

  // Fetch characters data for current page
  const {
    count,
    data,
    isLoading,
    error,
  } = useCharactersQuery(page);

  // Calculate total number of pages based on total count
  const pageCount = useMemo(() => Math.ceil((count || 0) / PAGE_SIZE), [count]);

  // Handle pagination page change
  const handlePageClick = useCallback(({ selected }: TPagination) => {
    // ReactPaginate uses 0-based index, we need 1-based
    setPage(selected + 1);
  }, []);

  // Handle character card click - enrich character data and open modal
  const handleShowDetails = useCallback(
    (character: ICharacter) => {
      navigate(`/character/${character.id}`, { state: { character } });
    },
    [navigate]
  );

  return {
    data,
    isLoading,
    error,
    pageCount,
    handleShowDetails,
    handlePageClick,
  };
};

export default useCharactersList;
