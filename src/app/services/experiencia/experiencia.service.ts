import { Injectable } from '@angular/core';
import { ExperienciaModel } from 'src/app/Models/ExperienciaModel';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  experiencia: ExperienciaModel[] = []

  constructor() { }

  getAllExperiencia(): ExperienciaModel[] {
    this.experiencia.push (new ExperienciaModel ('Productor Ejecutivo', 'Fidias Producciones', new Date (2017, 0o2), new Date (2020, 0o2), "Realizacion de cortometrajes, publicidades, institucionales" ));
    this.experiencia.push (new ExperienciaModel ('Diseñador freelancer', '', new Date (2021, 0o2), new Date (2022, 0o2), "Realizacion de Motion Graphics para empresas y emprendimientos" ))

    return this.experiencia
  }
}
