import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona, } from 'src/app/Models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  url:string="http://localhost:8080"

  constructor(private http:HttpClient) { }
   public getPersona():Observable<Persona> {
		return this.http.get<Persona>(this.url+"/ver/persona")
  }
}
