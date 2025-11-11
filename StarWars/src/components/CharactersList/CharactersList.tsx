import ReactPaginate from "react-paginate";
import React from "react";
import Modal from "react-modal";
import useCharactersList from "../../hooks/useCharactersList";
import CharacterFlow from "../CharacterFlow/ChatacterFlow";
import CharacterCard from "../CharacterCard/CharacterCard";
import type { ICharacter } from "../../api/types";
import "./CharactersList.scss";

const CharactersList = () => {
  const {
    data,
    isLoading,
    error,
    pageCount,
    handleShowDetails,
    handlePageClick,
    modalIsOpen,
    handleCloseModal,
    selectedCharacter,
  } = useCharactersList();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="CharactersList">
      <div className="CharactersList__items">
        {data?.map((character: ICharacter) => (
          <CharacterCard
            key={character.id}
            character={character}
            handleShowDetails={() => handleShowDetails(character)}
          />
        ))}
      </div>
      <div className="CharactersList__paginate">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="previous"
          renderOnZeroPageCount={null}
        />
      </div>

      {selectedCharacter && (
        <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
          <CharacterFlow selectedCharacter={selectedCharacter} />
        </Modal>
      )}
    </div>
  );
};

export default React.memo(CharactersList);
