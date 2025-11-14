// Component for pagination navigation
import { memo } from "react";
import ReactPaginate from "react-paginate";
import type { TPagination } from "../../types";
import "./CharactersListPagination.scss";

// Props interface for pagination component
type ICharactersListPaginationProps = {
  pageCount: number;
  handlePageClick: (event: TPagination) => void;
};

// CharactersListPagination component - renders pagination controls
const CharactersListPagination = (props: ICharactersListPaginationProps) => {
  const { pageCount, handlePageClick } = props;

  return (
    <div className="characters-pagination">
      {/* ReactPaginate component for page navigation */}
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
