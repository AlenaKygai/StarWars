import ReactPaginate from "react-paginate";
import React from "react";
import useCharactersList from "../../hooks/useCharactersList";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./CharactersList.scss";

const CharactersList = () => {
  const { data, isLoading, error, pageCount, viewAlert, handlePageClick } =
    useCharactersList();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="CharactersList">
      <div className="CharactersList__items">
        {data.results.map((character: any) => (
          <CharacterCard
            key={character.id}
            character={character}
            handleShowDetails={() => viewAlert(character.id)}
          />
        ))}
      </div>
      <div className="CharactersList__paginate">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default React.memo(CharactersList);
