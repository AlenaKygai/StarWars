// Component for displaying character relationships as a flow diagram
import { memo, useMemo } from "react";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import type { TModifiedCharacter } from "../../types";
import "@xyflow/react/dist/style.css";
import "./CharacterFlow.scss";

// Props interface for CharacterFlow component
type TCharacterFlowProps = {
  selectedCharacter: TModifiedCharacter;
};

// CharacterFlow component - displays relationship diagram between character, films, and starships
const CharacterFlow = (props: TCharacterFlowProps) => {
  const { selectedCharacter } = props;

  // Safely handle cases when films or starships are empty / missing
  const films = selectedCharacter?.films || [];
  const starships = selectedCharacter?.starships || [];

  // Main character node at the top of the diagram
  const characterNode = {
    id: `character-${selectedCharacter.id}`,
    position: { x: 0, y: 0 },
    data: { label: selectedCharacter.name },
  };

  // Film nodes positioned below the character
  const filmNodes = useMemo(
    () =>
      films.map((film, idx) => ({
        id: `film-${film.id}`,
        position: { x: -220 + idx * 220, y: 150 },
        data: { label: film.title },
      })),
    [films]
  );

  // Starship nodes positioned at the bottom
  const starshipNodes = useMemo(
    () =>
      starships.map((starship, idx) => ({
        id: `starship-${starship.id}`,
        position: { x: -300 + idx * 180, y: 320 },
        data: { label: starship.name },
      })),
    [starships]
  );

  // Edges connecting character to films
  const characterFilmsEdges = useMemo(
    () =>
      films.map((film) => ({
        id: `character-film-${film.id}`,
        source: `character-${selectedCharacter.id}`,
        target: `film-${film.id}`,
      })),
    [films, selectedCharacter.id]
  );

  // Edges connecting films to starships (only if starship appears in that film)
  const filmStarshipsEdges = useMemo(
    () =>
      starships.flatMap((starship) => {
        // Find films where this starship appears
        const relatedFilms = films.filter((film) =>
          film.starships.includes(starship.id)
        );

        // Create edge for each film-starship relationship
        return relatedFilms.map((film) => ({
          id: `film-starship-${film.id}-${starship.id}`,
          source: `film-${film.id}`,
          target: `starship-${starship.id}`,
        }));
      }),
    [films, starships]
  );

  // If there are no films and no starships, show a simple message instead of an empty graph
  const hasStarships = !!starshipNodes.length;
  const hasFilms = !!filmNodes.length;

  return (
    <div className="CharacterFlow">
      {/* ReactFlow component for rendering the diagram */}
      <ReactFlow
        nodes={[characterNode,
          ...(hasFilms ? filmNodes : []),
          ...(hasStarships ? starshipNodes : []),
        ]}
        edges={[
          ...(hasFilms ? characterFilmsEdges : []),
          ...(hasStarships ? filmStarshipsEdges : []),
        ]}
        fitView>
        {/* Background grid pattern */}
        <Background />
        {/* Zoom and pan controls */}
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default memo(CharacterFlow);
