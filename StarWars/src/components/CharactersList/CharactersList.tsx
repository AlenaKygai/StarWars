import React from "react";
import Modal from "react-modal";
import useCharactersList from "../../hooks/useCharactersList";
import Loader from "../Loader/Loader";
import CharactersListPagination from "../CharactersListPagination/CharactersListPagination";
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

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="CharactersList">
      {isLoading && <Loader isLoading />}

      <div className="CharactersList__items">
        {data?.map((character: ICharacter) => (
          <CharacterCard
            key={character.id}
            character={character}
            handleShowDetails={() => handleShowDetails(character)}
          />
        ))}
      </div>
      <CharactersListPagination
        pageCount={pageCount}
        handlePageClick={handlePageClick}
      />
      {selectedCharacter && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          className="CharactersList__modal">
          <button
            onClick={handleCloseModal}
            className="CharactersList__modal-close"
            aria-label="Close modal">
            &times;
          </button>
          <CharacterFlow selectedCharacter={selectedCharacter} />
        </Modal>
      )}
    </div>
  );
};

export default React.memo(CharactersList);
