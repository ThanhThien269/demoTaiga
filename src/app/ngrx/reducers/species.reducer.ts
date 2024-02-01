import { createReducer, on } from '@ngrx/store';
import { SpeciesState } from '../states/species.state';
import * as SpeciesActions from '../actions/species.actions';
import { Pokemon, SpeciesList } from '../../models/poke.model';
const initialState: SpeciesState = {
  species: <SpeciesList>{},
  pokemon: <Pokemon>{},
  PokemonList: [],
  isGetPokemonFailure: false,
  isGetPokemonSuccess: false,
  loading: false,
  isSuccess: false,
  error: false,
};

export const speciesReducer = createReducer(
  initialState,
  on(SpeciesActions.getListGen, (state) => {
    return {
      ...state,
      loading: true,
      isSuccess: false,
      error: false,
    };
  }),
  on(SpeciesActions.getListGenSuccess, (state, { speciesList }) => {
    return {
      ...state,
      species: speciesList,
      loading: false,
      isSuccess: true,
      error: false,
    };
  }),
  on(SpeciesActions.getListGenFailure, (state) => {
    return {
      ...state,
      loading: false,
      isSuccess: false,
      error: true,
    };
  }),

  on(SpeciesActions.getPokemon, (state, { type }) => {
    console.log(type);
    return <SpeciesState>{
      ...state,
      loading: true,
      isSuccess: false,
      error: false,
    };
  }),
  on(SpeciesActions.getPokemonSuccess, (state, action) => {
    console.log(action.type);
    return <SpeciesState>{
      ...state,
      PokemonList: [...state.PokemonList, action.pokemon],
      isGetPokemonSuccess: true,
      isGetPokemonFailure: false,
    };
  }),
  on(SpeciesActions.getPokemonFailure, (state) => {
    return {
      ...state,
      isGetPokemonSuccess: false,
      isGetPokemonFailure: true,
      error: true,
    };
  }),
  on(SpeciesActions.resetState, (state, { type }) => {
    console.log(type);
    return <SpeciesState>{
      ...state,
      species: <SpeciesList>{},
      pokemon: <Pokemon>{},
      PokemonList: [],
      isGetPokemonFailure: false,
      isGetPokemonSuccess: false,
      loading: false,
      isSuccess: false,
      error: false,
    };
  }),
  on(SpeciesActions.resetPokemonState, (state, { type }) => {
    console.log(type);
    return <SpeciesState>{
      ...state,
      pokemon: <Pokemon>{},
      PokemonList: [],
      isGetPokemonFailure: false,
      isGetPokemonSuccess: false,
      loading: false,
      isSuccess: false,
      error: false,
    };
  }),
  on(SpeciesActions.clearMessages, (state, { type }) => {
    console.log(type);
    return <SpeciesState>{
      ...state,
      isGetPokemonFailure: false,
      isGetPokemonSuccess: false,
      loading: false,
      isSuccess: false,
      error: false,
    };
  })
);
