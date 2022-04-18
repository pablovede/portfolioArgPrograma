import { Injectable } from '@angular/core';
import { EducacionModel } from 'src/app/Models/EducacionModel'

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  
  educacion: EducacionModel[] = []

  constructor() { }


getAllEducacion(): EducacionModel[] {
  this.educacion.push ( new EducacionModel ("Universidad Nacional de Villa Maria", "Licenciatura en Diseño y Produccion Audiovisual", new Date (2015, 0o2), new Date (2022, 0o2), 'https://comunicacioninstitucional.unvm.edu.ar/wp-content/uploads/2019/12/isologotipo-uso-basico.jpg'))
  this.educacion.push ( new EducacionModel ("Universidad Autonoma de Baja California", "Intercambio Estudiantil", new Date (2019, 0o2), new Date (2022, 0o0), 'https://upload.wikimedia.org/wikipedia/commons/b/ba/New_UABC_Logo.png'))

return this.educacion
}
}