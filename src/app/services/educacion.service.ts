import { Injectable } from '@angular/core';
import { EducacionModel } from 'src/app/Models/EducacionModel'

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  
  educacion: EducacionModel[] = []

  constructor() { }


getAllEducacion(): EducacionModel[] {
  let educacion1 = new EducacionModel ("UNVM", "Villa Maria", new Date (2015, 0o2), new Date (2022, 0o2), "La licenciatura")
  this.educacion.push (educacion1)

return this.educacion
}
}