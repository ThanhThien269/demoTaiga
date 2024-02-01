import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getGenList(gen: string) {
    return this.http.get(
      `https://pokeapi.co/api/v2/generation/generation-${gen}`
    );
  }

  getPokemonList(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
