// Application constants

// Number of characters displayed per page
export const PAGE_SIZE = 10;

// React Query cache keys for different data types
// Used to identify and invalidate cached queries
export const CHARACTERS_KEYS = {
  ALL: "characters", // Key for characters list
  FILMS: "films", // Key for films list
  STARSHIPS: "starships", // Key for starships list
  IMAGES: "images", // Key for character images mapping
} as const;
