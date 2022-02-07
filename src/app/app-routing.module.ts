import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { PokeTableComponent } from './components/poke-table/poke-table.component';


const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'pokemones',component:PokeTableComponent},
  {path: 'pokeStack/:id',component:PokeTableComponent},
  {path: '', pathMatch:'full', redirectTo: 'home'}, // Vacio redireccion a este componente
  {path: '**', pathMatch:'full', redirectTo: 'home'} // Ruta que no exista redireccion a este componente

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
