import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona, } from 'src/app/Models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  persona: Persona [] = []

  url:string="http://localhost:8080/persona"

  constructor(private http:HttpClient) {}

   public getPersonas():Observable<Persona[]> {
		return this.http.get<Persona[]>(`${this.url}/ver`)
  }

  public registrarPersona(persona:Persona):Observable<Persona> {
    return this.http.post<Persona>(`${this.url}/new`, persona);
  }

  public editarPersona(persona:Persona):Observable<Persona> {
    return this.http.put<Persona>(`${this.url}/editar`, persona)
  }
  public obtenerPersonaPorId(id:number):Observable<Persona>{
    return this.http.get<Persona>(`${this.url}/${id}`);
  }

public eliminarPersona(id:number) :Observable<void> {
  return this.http.delete<void>(`${this.url}/borrar/${id}`)
 }
}