// Component for displaying a single character card
import React from "react";
import "./CharacterCard.scss";
import type { ICharacter } from "../../api/types";

// Props interface for CharacterCard component
type TCharacterCardProps = {
  character: ICharacter;
  handleShowDetails: () => void;
};

// CharacterCard component - displays character image and name
const CharacterCard = (props: TCharacterCardProps) => {
  const { character, handleShowDetails } = props;

  return (
    <div className="CharacterCard" onClick={handleShowDetails}>
      {/* Character image background */}
      <div
        className="CharacterCard__image"
        style={{ backgroundImage: `url(${character.image || ""})` }}></div>
      {/* Character name */}
      <div className="CharacterCard__name">{character.name}</div>
    </div>
  );
};

export default React.memo(CharacterCard);
