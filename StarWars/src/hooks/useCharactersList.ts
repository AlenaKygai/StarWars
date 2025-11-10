import useCharactersQuery from "../queries/useCharactersQuery";
import { useState, useMemo, useCallback } from "react";
import type { ICharactersResponse } from "../api/charactersAPI";
import { PAGE_SIZE } from "../constans";

type TUseCharactersListReturn = {
  data?: ICharactersResponse;
  isLoading: boolean;
  error: Error | null;
  pageCount: number;
  viewAlert: (id: number) => void;
  handlePageClick: (event: TPagination) => void;
};

type TPagination = {
  selected: number;
};

const useCharactersList = (): TUseCharactersListReturn => {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, error } = useCharactersQuery(page);

  const pageCount = useMemo(
    () => Math.ceil((data?.count || 0) / PAGE_SIZE),
    [data?.count]
  );

  const handlePageClick = useCallback(({ selected }: TPagination) => {
    setPage(selected + 1);
  }, []);

  const viewAlert = useCallback((id: number) => {
    window.alert(`hello ${id}`);
  }, []);

  return {
    data,
    isLoading,
    error,
    pageCount,
    viewAlert,
    handlePageClick,
  };
};

export default useCharactersList;
