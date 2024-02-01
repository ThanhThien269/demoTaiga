import { Pokemon, SpeciesList } from '../../models/poke.model';

export interface SpeciesState {
  species: SpeciesList;
  pokemon: Pokemon;
  PokemonList: Pokemon[];
  loading: boolean;
  isSuccess: boolean;
  isGetPokemonSuccess: boolean;
  isGetPokemonFailure: boolean;
  error: boolean;
}
