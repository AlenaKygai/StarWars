import { memo } from "react";
import ReactPaginate from "react-paginate";
import type { TPagination } from "../../types";
import "./CharactersListPagination.scss";

type ICharactersListPaginationProps = {
  pageCount: number;
  handlePageClick: (event: TPagination) => void;
};

const CharactersListPagination = (props: ICharactersListPaginationProps) => {
  const { pageCount, handlePageClick } = props;

  return (
    <div className="characters-pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel="›"
        previousLabel="‹"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        containerClassName="characters-pagination__list"
        activeClassName="characters-pagination__item--active"
        pageClassName="characters-pagination__item"
        previousClassName="characters-pagination__item"
        nextClassName="characters-pagination__item"
        breakClassName="characters-pagination__item"
      />
    </div>
  );
};

export default memo(CharactersListPagination);
