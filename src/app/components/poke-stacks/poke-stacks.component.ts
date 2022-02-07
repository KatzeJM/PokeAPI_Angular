import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-poke-stacks',
  templateUrl: './poke-stacks.component.html',
  styleUrls: ['./poke-stacks.component.scss']
})


export class PokeStacksComponent implements OnInit {

  PokeNombre:any;
  PokeTipo:any;
  PokeMove:any;
  PokeImg:any;
  PokeNo:any;
  PokeA :any;
  PokeP : any;
  


   constructor(@Inject(MAT_DIALOG_DATA) public data:any)
   
   
   {

    this.PokeNombre=data.pokeName
    this.PokeTipo=data.pokeType
    this.PokeImg=data.pokeImg
    this.PokeNo=data.pokeId
    this.PokeA=data.pokeH
    this.PokeMove=data.pokeMoves
    this.PokeP=data.pokeW

  } 

 


  ngOnInit(): void {
  }

 

}
