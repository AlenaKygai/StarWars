// Custom hook for managing characters list state, pagination, and modal
import { useState, useMemo, useCallback } from "react";
import useCharactersQuery from "../queries/useCharactersQuery";
import useStarshipsQuery from "../queries/useStarshipsQuery";
import useFilmsQuery from "../queries/useFilmsQuery";
import type { ICharacter } from "../api/types";
import type { TModifiedCharacter, TPagination } from "../types";
import { PAGE_SIZE } from "../constans";

// Return type interface for useCharactersList hook
type TUseCharactersListReturn = {
  data?: ICharacter[];
  isLoading: boolean;
  error: Error | null;
  pageCount: number;
  handleShowDetails: (character: ICharacter) => void;
  handlePageClick: (event: TPagination) => void;
  modalIsOpen: boolean;
  handleCloseModal: () => void;
  selectedCharacter?: TModifiedCharacter;
};

// useCharactersList hook - manages characters list state, pagination, and modal operations
const useCharactersList = (): TUseCharactersListReturn => {
  // Current page number for pagination
  const [page, setPage] = useState<number>(1);
  // Modal window open/close state
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  // Currently selected character with enriched data (films, starships)
  const [selectedCharacter, setSelectedCharacter] =
    useState<TModifiedCharacter>();

  // Fetch characters data for current page
  const {
    count,
    data: dataCharacters,
    isLoading: isLoadingCharacters,
    error: errorCharacters,
  } = useCharactersQuery(page);

  // Fetch all films data
  const {
    data: dataFilms,
    isLoading: isLoadingFilms,
    error: errorFilms,
  } = useFilmsQuery();

  // Fetch all starships data
  const {
    data: dataStarships,
    isLoading: isLoadingStarships,
    error: errorStarships,
  } = useStarshipsQuery();

  // Calculate total number of pages based on total count
  const pageCount = useMemo(() => Math.ceil((count || 0) / PAGE_SIZE), [count]);

  // Open modal window
  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  // Close modal window
  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Handle pagination page change
  const handlePageClick = useCallback(({ selected }: TPagination) => {
    // ReactPaginate uses 0-based index, we need 1-based
    setPage(selected + 1);
  }, []);

  // Handle character card click - enrich character data and open modal
  const handleShowDetails = useCallback(
    (character: ICharacter) => {
      // Get arrays of film and starship IDs for this character
      const characterFilmsIds = character.films;
      const characterStarshipsIds = character.starships;

      // Map film IDs to full film objects
      const characterFilms = characterFilmsIds.map((id) => {
        return dataFilms?.find((f) => f.id === id);
      });

      // Map starship IDs to full starship objects
      const characterStarships = characterStarshipsIds.map((id) => {
        return dataStarships?.find((ship) => ship.id === id);
      });

      // Create enriched character object with full film and starship data
      const modifiedCharacter = {
        ...character,
        films: characterFilms,
        starships: characterStarships,
      } as TModifiedCharacter;

      // Set selected character and open modal
      setSelectedCharacter(modifiedCharacter);
      handleOpenModal();
    },
    [dataFilms, dataStarships]
  );

  return {
    data: dataCharacters,
    // Loading if any of the queries is loading
    isLoading: isLoadingCharacters || isLoadingFilms || isLoadingStarships,
    // Error if any of the queries has error
    error: errorCharacters || errorFilms || errorStarships,
    pageCount,
    handleShowDetails,
    handlePageClick,
    modalIsOpen,
    handleCloseModal,
    selectedCharacter,
  };
};

export default useCharactersList;
