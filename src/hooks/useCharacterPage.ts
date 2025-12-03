import { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import type { ICharacter } from "../api/types";
import type { TModifiedCharacter } from "../types";
import useFilmsQuery from "../queries/useFilmsQuery";
import useStarshipsQuery from "../queries/useStarshipsQuery";
import useCharacterByIdQuery from "../queries/useCharacterByIdQuery";

type LocationState = {
    // Character can be passed via navigate(..., { state: { character } })
    character?: ICharacter;
};

export type TUseCharacterPageReturn = {
    id?: string; // id from URL
    character?: ICharacter; // base character from API (only ids of films and starships)
    modifiedCharacter?: TModifiedCharacter; // character with full film and starship objects
    isLoading: boolean;
    error: Error | null;
    handleBack: () => void;
};

const useCharacterPage = (): TUseCharacterPageReturn => {
    // Get id from URL and try to get character from location.state (if we navigated from list)
    const { id } = useParams<{ id: string }>();
    const { state } = useLocation();
    const navigate = useNavigate();
    const locationCharacter = (state as LocationState)?.character;

    // If character is not in state, fetch it by id
    const {
        data: fetchedCharacter,
        isLoading: isLoadingCharacter,
        error: errorCharacter,
    } = useCharacterByIdQuery({ id, enabled: !locationCharacter });

    // Final character: from location state or fetched from API
    const character = locationCharacter || fetchedCharacter;

    // get film and starship ids from character
    const filmIds = character?.films || [];
    const starshipIds = character?.starships || [];

    const shouldLoadStarships = filmIds.length > 0;

    // Build query params for films request
    const filmsParams = useMemo(
        () => (filmIds.length ? { id__in: filmIds.join(",") } : {} as Record<string, string | number>),
        [filmIds]
    );

    // Build query params for starships request
    const starshipsParams = useMemo(() => {
        if (!shouldLoadStarships) return {};

        return {
            ...(filmIds.length && { films__in: filmIds.join(",") }),
            ...(starshipIds.length && { id__in: starshipIds.join(",") }),
        };
    }, [filmIds, starshipIds, shouldLoadStarships]);

    // Load films only when character exists and there are film ids
    const {
        data: dataFilms,
        isLoading: isLoadingFilms,
        error: errorFilms,
    } = useFilmsQuery(
        filmsParams,
        { enabled: !!character && !!filmIds.length }
    );

    // Load starships only when character exists and there are related ids
    const {
        data: dataStarships,
        isLoading: isLoadingStarships,
        error: errorStarships,
    } = useStarshipsQuery(
        starshipsParams,
        { enabled: !!character && shouldLoadStarships }
    );

    // Build "extended" character with full film and starship objects
    const modifiedCharacter = useMemo(() => {
        if (!character) return undefined;

        return {
            ...character,
            films: (dataFilms || []).filter(f =>
                character.films.includes(f.id)
            ),
            starships: (dataStarships || []).filter(s =>
                character.starships.includes(s.id)
            ),
        } as TModifiedCharacter;
    }, [character, dataFilms, dataStarships]);

    const handleBack = () => {
        navigate(-1);
    };

    return {
        id,
        character,
        modifiedCharacter,
        // Combined loading flag: any of the three requests is loading
        isLoading: isLoadingCharacter || isLoadingFilms || isLoadingStarships,
        // Combined error from any of the three requests
        error: errorCharacter || errorFilms || errorStarships,
        handleBack,
    };
};

export default useCharacterPage;
