import { Injectable } from '@angular/core';
import { Educacion } from 'src/app/Models/Educacion'

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  
  educacion: Educacion[] = []

  constructor() { }


getAllEducacion(): Educacion[] {
  this.educacion.push ( new Educacion ("UNVM", "Villa Maria", new Date (2015, 0o2), new Date (2022, 0o2), "Licienciatura en Diseño y Produccion Audiovisual"))


return this.educacion
}
}