import { Injectable } from '@angular/core';
import { SkillModel } from 'src/app/Models/SkillModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


/*const httpOption = {
  headers: new HttpHeaders({
  'Content-Type':'application/json'
  })
} */
@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url:string="http://localhost:8080/skill"

  constructor(private http:HttpClient) { }
   public getSkill():Observable<SkillModel> {
		return this.http.get<SkillModel>(this.url+"/ver/perfil")
  }
}