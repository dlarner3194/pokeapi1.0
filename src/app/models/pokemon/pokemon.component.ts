import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../service/pokeapi.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  public results;

  constructor(private pokeApi: PokeapiService) { }

  ngOnInit() {
    this.pokeApi.getPokemon().subscribe(data => {
      this.results = data.name;
      console.log(this.results);
    });

    this.pokeApi.getAllPokemon().subscribe(list => {
      this.results = list;
      console.log(this.results);
    })
  }
}
