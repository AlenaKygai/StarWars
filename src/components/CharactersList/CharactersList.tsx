// Component for displaying a list of Star Wars characters
import React from "react";
import useCharactersList from "../../hooks/useCharactersList";
import Loader from "../Loader/Loader";
import CharactersListPagination from "../CharactersListPagination/CharactersListPagination";
import CharacterCard from "../CharacterCard/CharacterCard";
import type { ICharacter } from "../../api/types";
import "./CharactersList.scss";

// CharactersList component - displays paginated list of characters
const CharactersList = () => {
  // Custom hook that manages characters list state and pagination
  const { data, isLoading, error, pageCount, handleShowDetails, handlePageClick } =
    useCharactersList();

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
    </div>
  );
};

export default React.memo(CharactersList);
