// Type definitions for Star Wars API responses

// Generic interface for paginated API responses
export interface IPaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// Interface for character image mapping
export interface ICharacterImage {
  id: number;
  image: string;
}

// Interface for Star Wars character data
export interface ICharacter {
  id: number;
  name: string;
  image?: string; // Character image URL (fetched from external API, optional)
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: number;
  films: number[];
  species: number[];
  vehicles: number[];
  starships: number[];
  created: string;
  edited: string;
  url: string;
}

// Interface for Star Wars film data
export interface IFilm {
  id: number;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: number[];
  planets: number[];
  starships: number[];
  vehicles: number[];
  species: number[];
  created: string;
  edited: string;
  url: string;
}

// Interface for Star Wars starship data
export interface IStarship {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: number[];
  films: number[];
  created: string;
  edited: string;
  url: string;
}

// Response interface for characters API endpoint
export interface ICharactersResponse extends IPaginatedResponse<ICharacter> {}

// Response interface for films API endpoint
export interface IFilmsResponse extends IPaginatedResponse<IFilm> {}

// Response interface for starships API endpoint
export interface IStarshipsResponse extends IPaginatedResponse<IStarship> {}
