import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from '../models/characters.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  urlApi='https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

getAll(): Observable<Characters[]> {
    return this.http.get<Characters[]>(this.urlApi);
}

get(id : any): Observable<Characters> {
    return this.http.get<Characters>(`${this.urlApi}/${id}`);
}

create(data : any): Observable<any> {
    return this.http.post(this.urlApi, data);
}

update(id : any, data : any): Observable<any> {
    return this.http.put(`${this.urlApi}/${id}`, data);
}

delete(id : any): Observable<any> {
    return this.http.delete(`${this.urlApi}/${id}`);
}

deleteAll(): Observable<any> {
    return this.http.delete(this.urlApi);
}

findByName(name : any): Observable<Characters[]> {
    return this.http.get<Characters[]>(`${this.urlApi}?name=${name}`);
}
}
