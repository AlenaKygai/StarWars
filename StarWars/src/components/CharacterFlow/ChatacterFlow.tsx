import { memo, useMemo } from "react";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import type { TModifiedCharacter } from "../../types";
import "@xyflow/react/dist/style.css";
import "./CharacterFlow.scss";

type TCharacterFlowProps = {
  selectedCharacter: TModifiedCharacter;
};

const CharacterFlow = (props: TCharacterFlowProps) => {
  const { selectedCharacter } = props;

  const caracterNode = {
    id: `character-${selectedCharacter.id}`,
    position: { x: 0, y: 0 },
    data: { label: selectedCharacter.name },
  };

  const filmNodes = useMemo(
    () =>
      selectedCharacter.films.map((film, idx) => ({
        id: `film-${film.id}`,
        position: { x: -220 + idx * 220, y: 150 },
        data: { label: film.title },
      })),
    [selectedCharacter.films]
  );

  const starshipNodes = useMemo(
    () =>
      selectedCharacter.starships.map((starship, idx) => ({
        id: `starship-${starship.id}`,
        position: { x: -300 + idx * 180, y: 320 },
        data: { label: starship.name },
      })),
    [selectedCharacter.starships]
  );

  const characterFilmsEdges = useMemo(
    () =>
      selectedCharacter.films.map((film) => ({
        id: `character-film-${film.id}`,
        source: `character-${selectedCharacter.id}`,
        target: `film-${film.id}`,
      })),
    [selectedCharacter]
  );

  const filmStarshipsEdges = useMemo(
    () =>
      selectedCharacter.starships.flatMap((starship) => {
        const relatedFilms = selectedCharacter.films.filter((film) =>
          film.starships.includes(starship.id)
        );

        return relatedFilms.map((film) => ({
          id: `film-starship-${film.id}-${starship.id}`,
          source: `film-${film.id}`,
          target: `starship-${starship.id}`,
        }));
      }),
    [selectedCharacter]
  );

  return (
    <div className="CharacterFlow">
      <ReactFlow
        nodes={[caracterNode, ...filmNodes, ...starshipNodes]}
        edges={[...characterFilmsEdges, ...filmStarshipsEdges]}
        fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default memo(CharacterFlow);
