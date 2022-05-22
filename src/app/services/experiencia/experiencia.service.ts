import { Injectable } from '@angular/core';
import { ExperienciaModel } from 'src/app/Models/ExperienciaModel';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  experiencia: ExperienciaModel[] = []

  constructor() { }


getAllExperiencia(): ExperienciaModel[] {
  this.experiencia.push ( new ExperienciaModel ("Productor Ejecutivo", "Fidias Producciones", "fecha1", "fecha2",'Realizacion de videoclips, cortometrajes, institucionales' ))
  this.experiencia.push ( new ExperienciaModel ("Diseñador Freelancer", "", "fecha2", "fecha3",'Realizacion de motion graphics para emprendimientos' ))

return this.experiencia
}
}
