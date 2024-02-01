import { Pokemon, SpeciesList } from './../../models/poke.model';
import { createAction, props } from '@ngrx/store';

export const getListGen = createAction(
  '[Pokemon] Get List',
  props<{ gen: string }>()
);

export const getListGenSuccess = createAction(
  '[Pokemon] Get List Success',
  props<{ speciesList: SpeciesList }>()
);

export const getListGenFailure = createAction(
  '[Pokemon] Get List Failure',
  props<{ errorMessage: string }>()
);

export const getPokemon = createAction(
  '[Pokemon] Get Pokemon',
  props<{ name: string }>()
);

export const getPokemonSuccess = createAction(
  '[Pokemon] Get Pokemon Success',
  props<{ pokemon: Pokemon }>()
);

export const getPokemonFailure = createAction(
  '[Pokemon] Get Pokemon Failure',
  props<{ errorMessage: string }>()
);
export const resetState = createAction('[Profile] Clear States');

export const resetPokemonState = createAction('[Profile] Clear Pokemon States');

export const clearMessages = createAction('[Profile] Clear Messages');
