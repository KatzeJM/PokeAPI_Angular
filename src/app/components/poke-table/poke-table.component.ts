import { Component, OnInit, ViewChild , Input} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {PokeStacksComponent} from '../poke-stacks/poke-stacks.component'


@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss']
})
export class PokeTableComponent implements OnInit {

  //Columnas PokemonTable 
  displayedColumns: string[] = ['position', 'name', 'image'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);
  //Paginacion
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator; // paginator(!)como un sufijo al nombre de la variable.
  
    pokemon : any ='';
    pokeType=[];
    pokeType1=[];
    pokeImg = '';

 


  
  constructor(private ApiService: ApiService, private router: Router, private dialogRef:MatDialog, private pokemonService:ApiService, private activateRouter:ActivatedRoute) { 

    this.activateRouter.params.subscribe(
      params =>{
        this.getPokemon(params['id']);

      }

    );
    
  }

  
  
  
  ngOnInit(): void {
    this.getPokemons();
  }


 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

  getPokemons(){ 
    let infoPokemon;
//Cambiar el valor para mostrar mas pokemones, i=id pokemon
    for(let i =21; i<=30; i++){ 
      this.ApiService.getPokemon(i).subscribe(  
        res => {
          infoPokemon = {
            position:i,
            name:res.name,
            image: res.sprites.front_default //sprites.front_default = api ItemSprites 
           
          };
          this.data.push(infoPokemon) //Se almacen los datos de dataP a el array data
          this.dataSource = new MatTableDataSource<any>(this.data) //Actualizar dataSource que se inicializa vacio
          this.dataSource.paginator = this.paginator;
          // console.log(res)
        },
        err =>{
          console.log(err)
        }
      );
    } 

      
    
  }



 
  

 //Obtiene elemento seleccionado
 getRow(row:any){
  // console.log(row);
  // this.dialogRef.open(PokeStacksComponent) 
  this.router.navigateByUrl(`/pokeStack/${row.position}`);
}



//  Metodo para Obtener el ID
 getPokemon(id:number){
  this.pokemonService.getPokemon(id).subscribe(
   res =>{
     console.log(res)
    //  console.log(this.pokemon);

     this.pokemon = res;
     this.pokeImg = this.pokemon.sprites.front_default;
     this.pokeType= res.types[0].type.name;
     this.pokeType1= res.types[1].type.name;

   },
   err =>{

   }
  );
}



openDialog(){
  this.dialogRef.open(PokeStacksComponent,{
    data : {
      pokeName :this.pokemon.name,
      pokeId :this.pokemon.id,
      pokeType:  this.pokeType,
      pokeType1:  this.pokeType1,
      pokeH :this.pokemon.height,
      pokeW :this.pokemon.weight,
      pokeImg:  this.pokeImg
    }
  })

  
}

}

