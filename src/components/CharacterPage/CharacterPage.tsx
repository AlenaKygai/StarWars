// Page component for displaying details of a single character
import React from "react";
import Loader from "../Loader/Loader";
import CharacterFlow from "../CharacterFlow/CharacterFlow";
import useCharacterPage from "../../hooks/useCharacterPage";
import "./CharacterPage.scss";

const CharacterPage = () => {
    const { id, character, modifiedCharacter, isLoading, error, handleBack } =
        useCharacterPage();

    // If character was not passed via navigation state
    if (!isLoading && !character) {
        return <div>Character data is not available.</div>;
    }

    if (isLoading) {
        return <Loader isLoading />;
    }

    if (error) {
        return <div>Error loading character details.</div>;
    }

    if (!modifiedCharacter) {
        return <div>No details available for this character.</div>;
    }

    return (
        <div className="CharacterPage">
            <button
                type="button"
                className="CharacterPage__back"
                onClick={handleBack}
            >
                ← Back
            </button>
            <h2 className="CharacterPage__title">
                Character: {modifiedCharacter.name} (ID: {id})
            </h2>
            <CharacterFlow selectedCharacter={modifiedCharacter} />
        </div>
    );
};

export default React.memo(CharacterPage);


