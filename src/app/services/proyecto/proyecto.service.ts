import { Injectable } from '@angular/core';
import { ProyectoModel } from 'src/app/Models/ProyectoModel';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  proyecto: ProyectoModel [] = []

  constructor() { }

  getAllProyecto(): ProyectoModel[] {
    this.proyecto.push (new ProyectoModel('Portfolio en Angular', new Date (2022, 0o6), 'Proyecto integrador donde se aplicaron distintas tecnologias y recursos', 'aca va el link'))

    return this.proyecto
  }
}
