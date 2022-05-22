import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectoModel } from 'src/app/Models/ProyectoModel';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  url:string="http://localhost:8080/proyecto"

  constructor(private http:HttpClient) { }
   public getProyecto():Observable<ProyectoModel> {
		return this.http.get<ProyectoModel>(this.url+"/ver/perfil")
  }
}
