import React from "react";
import "./CharacterCard.scss";
import type { ICharacter } from "../../api/types";

type TCharacterCardProps = {
  character: ICharacter;
  handleShowDetails: () => void;
};

const CharacterCard = (props: TCharacterCardProps) => {
  const { character, handleShowDetails } = props;

  return (
    <div className="CharacterCard" onClick={handleShowDetails}>
      <div
        className="CharacterCard__image"
        style={{ backgroundImage: `url(${character.image || ""})` }}></div>
      <div className="CharacterCard__name">{character.name}</div>
    </div>
  );
};

export default React.memo(CharacterCard);
