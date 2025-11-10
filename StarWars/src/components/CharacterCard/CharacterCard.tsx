import React from "react";
import "./CharacterCard.scss";
import type { ICharacter } from "../../api/types";

type TCharacterCardProps = {
  character: ICharacter;
  handleShowDetails: () => void;
}

const CharacterCard = (props: TCharacterCardProps) => {
  const { character, handleShowDetails } = props;

  return (
    <div className="CharacterCard" onClick={handleShowDetails}>
      <img
        className="CharacterCard__image"
        src="src/assets/default-avatar.jpg"
      />
      <div className="CharacterCard__name">{character.name}</div>
    </div>
  );
};

export default React.memo(CharacterCard);
