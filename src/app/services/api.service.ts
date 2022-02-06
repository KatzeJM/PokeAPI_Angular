import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API :  string = environment.baseApi;
  

  constructor(private http: HttpClient) { }
  
  getPokemon(index: number){ 
    return this.http.get<any>(`${this.API}/pokemon/${index}`)
  }
}
