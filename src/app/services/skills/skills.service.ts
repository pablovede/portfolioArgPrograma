import { Injectable } from '@angular/core';
import { SkillModel } from 'src/app/Models/SkillModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private apiServerUrl= environment.apiBaseUrl + '/skill';
  constructor(private http:HttpClient) { }


  public getSkills():Observable<SkillModel[]> {
		return this.http.get<SkillModel[]>(`${this.apiServerUrl}/ver`)
  }

  public registrarSkill(skill:SkillModel):Observable<SkillModel> {
    return this.http.post<SkillModel>(`${this.apiServerUrl}/new`, skill);
  }

  public editarSkill(skill:SkillModel):Observable<SkillModel> {
    return this.http.put<SkillModel>(`${this.apiServerUrl}/editar`, skill);
  }
  
  public obtenerSkillPorId(id:number):Observable<SkillModel>{
    return this.http.get<SkillModel>(`${this.apiServerUrl}/${id}`);
  }

public eliminarSkill(id:number) :Observable<void> {
  return this.http.delete<void>(`${this.apiServerUrl}/borrar/${id}`)
 }
}