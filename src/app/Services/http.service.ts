import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  obtenerDatos(search: string = 'perros'): Observable<any>{
    return this.http.get(`https://api.giphy.com/v1/stickers/search?api_key=aao91MGxK3S14s1aRPitOxENx1B7iuPP&q=${search}&limit=25&offset=0&rating=g&lang=es`)
  }

}
