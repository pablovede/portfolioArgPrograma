import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EducacionModel } from 'src/app/Models/EducacionModel'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  
  private apiServerUrl= environment.apiBaseUrl + '/educacion';

  //obtener todas las educaciones
  constructor(private http:HttpClient) { }

  
   public getEducacion():Observable<EducacionModel[]> {
		return this.http.get<EducacionModel[]>(`${this.apiServerUrl}/ver`)
  }

  public registrarEducacion(educacion:EducacionModel):Observable<EducacionModel> {
    return this.http.post<EducacionModel>(`${this.apiServerUrl}/new`, educacion);
  }

  //metodo del peruano

  // public editarEducacion(id:number, educacion:EducacionModel):Observable<Object>{
  //   return this.http.put(`${this.url+'/editar'}/${id}`,educacion);
  // }

  //metodo de amigoscode
  public editarEducacion(educacion: EducacionModel): Observable<EducacionModel> {
    return this.http.put<EducacionModel>(`${this.apiServerUrl}/editar`, educacion);
  }
  
  public obtenerEducacionPorId(id:number):Observable<EducacionModel>{
    return this.http.get<EducacionModel>(`${this.apiServerUrl}/${id}`);
  }

public eliminarEducacion(id:number) :Observable<void> {
  return this.http.delete<void>(`${this.apiServerUrl}/borrar/${id}`)
 }
}