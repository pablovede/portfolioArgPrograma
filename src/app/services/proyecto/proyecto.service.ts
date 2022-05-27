import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectoModel } from 'src/app/Models/ProyectoModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private apiServerUrl= environment.apiBaseUrl + '/proyecto';
  constructor(private http:HttpClient) { }

  public getProyectos():Observable<ProyectoModel[]> {
		return this.http.get<ProyectoModel[]>(`${this.apiServerUrl}/ver`)
  }

  public registrarProyecto(proyecto:ProyectoModel):Observable<ProyectoModel> {
    return this.http.post<ProyectoModel>(`${this.apiServerUrl}/new`, proyecto);
  }

  public editarProyecto(proyecto:ProyectoModel):Observable<ProyectoModel> {
    return this.http.put<ProyectoModel>(`${this.apiServerUrl}/editar`, proyecto);
  }
  
  public obtenerProyectoPorId(id:number):Observable<ProyectoModel>{
    return this.http.get<ProyectoModel>(`${this.apiServerUrl}/${id}`);
  }

public eliminarProyecto(id:number) :Observable<void> {
  return this.http.delete<void>(`${this.apiServerUrl}/borrar/${id}`)
 }
}
