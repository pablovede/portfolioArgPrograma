import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaModel } from 'src/app/Models/ExperienciaModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiServerUrl= environment.apiBaseUrl + '/experiencia';

  //obtener todas las educaciones
  constructor(private http:HttpClient) { }

  
   public getExperiencia():Observable<ExperienciaModel[]> {
		return this.http.get<ExperienciaModel[]>(`${this.apiServerUrl}/ver`)
  }

  public registrarExperiencia(experiencia:ExperienciaModel):Observable<ExperienciaModel> {
    return this.http.post<ExperienciaModel>(`${this.apiServerUrl}/new`, experiencia);
  }

  public editarExperiencia(experiencia:ExperienciaModel):Observable<ExperienciaModel> {
    return this.http.put<ExperienciaModel>(`${this.apiServerUrl}/editar`, experiencia);
  }
  
  public obtenerEducacionPorId(id:number):Observable<ExperienciaModel>{
    return this.http.get<ExperienciaModel>(`${this.apiServerUrl}/${id}`);
  }

public eliminarExperiencia(id:number) :Observable<void> {
  return this.http.delete<void>(`${this.apiServerUrl}/borrar/${id}`)
 }
}