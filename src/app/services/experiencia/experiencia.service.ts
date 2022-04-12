import { Injectable } from '@angular/core';
import { ExperienciaModel } from 'src/app/Models/ExperienciaModel';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  experiencia: ExperienciaModel[] = []

  constructor() { }


getAllExperiencia(): ExperienciaModel[] {
  this.experiencia.push ( new ExperienciaModel ("Productor Ejecutivo", "Fidias Producciones", new Date (2017, 0o2), new Date (2020, 0o2),'Realizacion de videoclips, cortometrajes, institucionales' ))
  this.experiencia.push ( new ExperienciaModel ("Diseñador Freelancer", "", new Date (2017, 0o2), new Date (2020, 0o2),'Realizacion de motion graphics para emprendimientos' ))

return this.experiencia
}
}
