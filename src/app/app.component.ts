import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
} from '@taiga-ui/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpeciesState } from './ngrx/states/species.state';
import { Store } from '@ngrx/store';
import { Subscription, merge, mergeMap, share, switchMap } from 'rxjs';
import * as SpeciesActions from './ngrx/actions/species.actions';
import { Pokemon, Species } from './models/poke.model';
import { SharedModule } from '../shared/shared.module';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    SharedModule,
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'cuahang';
  subscriptions: Subscription[] = [];
  speciesList: Species[] = [];
  speciesList$ = this.store.select('species', 'species');

  listSuccess$ = this.store.select('species', 'isSuccess');

  listPokemonSuccess$ = this.store.select('species', 'isGetPokemonSuccess');

  pokemonList$ = this.store.select('species', 'PokemonList');
  constructor(private store: Store<{ species: SpeciesState }>) {}
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    this.store.dispatch(SpeciesActions.resetPokemonState());
  }
  ngOnInit(): void {
    // console.log('app component');

    this.subscriptions.push(
      this.listSuccess$
        .pipe(
          mergeMap((success) => {
            if (success) {
              this.speciesList = [];
              return this.speciesList$;
            }
            return [];
          })
        )
        .subscribe((speciesList) => {
          if (speciesList) {
            this.speciesList = speciesList.pokemon_species;
            for (let i = 0; i < this.speciesList.length; i++) {
              this.store.dispatch(
                SpeciesActions.getPokemon({
                  name: this.speciesList[i].name,
                })
              );
            }
          }
        })
    );
  }
  //
  open = false;
  showDialog(pokemon: Pokemon): void {
    this.chosenPokemon = pokemon;
    this.open = true;
  }
  chosenPokemon!: Pokemon;
  genList = [
    { name: 'gen1', value: 'i' },
    { name: 'gen2', value: 'ii' },
    { name: 'gen3', value: 'iii' },
    { name: 'gen4', value: 'iv' },
    { name: 'gen5', value: 'v' },
    { name: 'gen6', value: 'vi' },
    { name: 'gen7', value: 'vii' },
    { name: 'gen8', value: 'viii' },
    { name: 'gen9', value: 'ix' },
  ];
  getSpeciesList(gen: string) {
    this.store.dispatch(SpeciesActions.resetPokemonState());
    this.store.dispatch(SpeciesActions.getListGen({ gen: gen }));
  }
}
