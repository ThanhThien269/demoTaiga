export interface SpeciesList {
  id: number;
  pokemon_species: Species[];
}
export interface Species {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  height: number;
  weight: number;
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
      home: {
        front_default: string;
      };
    };
  };
}
