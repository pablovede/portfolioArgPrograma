import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EducacionModel } from 'src/app/Models/EducacionModel'

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  //educacion: EducacionModel[] = []
  
  url:string="http://localhost:8080/educacion"

  //obtener todas las educaciones
  constructor(private http:HttpClient) { }
   public getEducacion():Observable<EducacionModel[]> {
		return this.http.get<EducacionModel[]>(`${this.url+"/ver"}`)
  }
}