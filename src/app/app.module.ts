import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokeapiService } from './service/pokeapi.service';
import { PokemonComponent } from './models/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PokeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
