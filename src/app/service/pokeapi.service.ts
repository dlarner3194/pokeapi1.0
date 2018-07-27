import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon/pokemon';

@Injectable()
export class PokeapiService {

  constructor(private http: HttpClient) { }

  getPokemon() {
    return this.http.get<any>('http://pokeapi.salestock.net/api/v2/pokemon/1/');
  }
}
