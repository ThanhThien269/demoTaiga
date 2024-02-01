import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokemonService } from '../../services/pokemon.service';
import { mergeMap, map, catchError, of, switchMap } from 'rxjs';
import {
  getListGen,
  getListGenSuccess,
  getListGenFailure,
} from '../actions/species.actions';

import * as ProfileActions from '../actions/species.actions';
@Injectable()
export class SpeciesEffects {
  constructor(
    private actions$: Actions,
    private speciesService: PokemonService
  ) {}

  getListGen$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getListGen),
      mergeMap((action) => {
        return this.speciesService.getGenList(action.gen).pipe(
          map((data: any) => {
            return getListGenSuccess({ speciesList: data });
          }),
          catchError((error) => {
            return of(getListGenFailure({ errorMessage: error.message }));
          })
        );
      })
    );
  });

  getPokemon$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileActions.getPokemon),
      mergeMap((action) => {
        return this.speciesService.getPokemonList(action.name).pipe(
          map((data: any) => {
            return ProfileActions.getPokemonSuccess({
              pokemon: data,
            });
          }),
          catchError((error) => {
            return of(
              ProfileActions.getPokemonFailure({ errorMessage: error })
            );
          })
        );
      })
    );
  });
}
