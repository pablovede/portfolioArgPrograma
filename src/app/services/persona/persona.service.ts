import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona, } from 'src/app/Models/Persona';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  persona: Persona [] = []

  private apiServerUrl= environment.apiBaseUrl + '/persona';
  constructor(private http:HttpClient) {}

   public getPersonas():Observable<Persona[]> {
		return this.http.get<Persona[]>(`${this.apiServerUrl}/ver`)
  }

  public registrarPersona(persona:Persona):Observable<Persona> {
    return this.http.post<Persona>(`${this.apiServerUrl}/new`, persona);
  }

  public editarPersona(persona:Persona):Observable<Persona> {
    return this.http.put<Persona>(`${this.apiServerUrl}/editar`, persona)
  }
  public obtenerPersonaPorId(id:number):Observable<Persona>{
    return this.http.get<Persona>(`${this.apiServerUrl}/${id}`);
  }

public eliminarPersona(id:number) :Observable<void> {
  return this.http.delete<void>(`${this.apiServerUrl}/borrar/${id}`)
 }
}