// Component for displaying a list of Star Wars characters
import React from "react";
import Modal from "react-modal";
import useCharactersList from "../../hooks/useCharactersList";
import Loader from "../Loader/Loader";
import CharactersListPagination from "../CharactersListPagination/CharactersListPagination";
import CharacterFlow from "../CharacterFlow/ChatacterFlow";
import CharacterCard from "../CharacterCard/CharacterCard";
import type { ICharacter } from "../../api/types";
import "./CharactersList.scss";

// CharactersList component - displays paginated list of characters with modal for details
const CharactersList = () => {
  // Custom hook that manages characters list state, pagination, and modal
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

  // Display error message if data fetching failed
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="CharactersList">
      {/* Show loading indicator while data is being fetched */}
      {isLoading && <Loader isLoading />}

      {/* Grid container for character cards */}
      <div className="CharactersList__items">
        {data?.map((character: ICharacter) => (
          <CharacterCard
            key={character.id}
            character={character}
            handleShowDetails={() => handleShowDetails(character)}
          />
        ))}
      </div>
      {/* Pagination component for navigating between pages */}
      <CharactersListPagination
        pageCount={pageCount}
        handlePageClick={handlePageClick}
      />
      {/* Modal window with character relationship flow diagram */}
      {selectedCharacter && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          className="CharactersList__modal">
          {/* Close button for the modal */}
          <button
            onClick={handleCloseModal}
            className="CharactersList__modal-close"
            aria-label="Close modal">
            &times;
          </button>
          {/* Flow diagram showing character's films and starships */}
          <CharacterFlow selectedCharacter={selectedCharacter} />
        </Modal>
      )}
    </div>
  );
};

export default React.memo(CharactersList);
