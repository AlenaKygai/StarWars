import useCharactersQuery from "../queries/useCharactersQuery";
import { useState, useMemo, useCallback } from "react";

const useCharactersList = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useCharactersQuery(page);

  const pageCount = useMemo(() => Math.ceil(data?.count / 10), [data?.count]);

  const handlePageClick = useCallback(({ selected }) => {
    setPage(selected);
  }, []);

  const viewAlert = useCallback((id) => {
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
