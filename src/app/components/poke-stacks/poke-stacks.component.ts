import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-poke-stacks',
  templateUrl: './poke-stacks.component.html',
  styleUrls: ['./poke-stacks.component.scss']
})
export class PokeStacksComponent implements OnInit {
   //Se inyecta export class ApiService de "app\services\api.service.ts"
  //Se inyectaactivateRouter para obtener el parametro de la URL
  // constructor(private pokemonService:ApiService, private activateRouter:ActivatedRoute) {
  //   this.activateRouter.params.subscribe(
  //     params =>{
  //       this.getPokemon(params['id']);

  //     }

  //   );




  // } 

 

  ngOnInit(): void {
  }

  //Metodo para Obtener el ID
  // getPokemon(id:number){
  //    this.pokemonService.getPokemon(id).subscribe(
  //     res =>{
  //       console.log(res);
  //     },
  //     err =>{

  //     }
  //    );
  // }

}
