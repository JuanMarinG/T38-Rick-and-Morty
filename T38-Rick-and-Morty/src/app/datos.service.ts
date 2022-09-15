import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  retonar(){
    return this.http.get("https://rickandmortyapi.com/api/character/1,183,3,4,6,7,8,32");
  }


  funCharacter(id:any){
    return this.http.get("https://rickandmortyapi.com/api/character/"+id);
  }
}
