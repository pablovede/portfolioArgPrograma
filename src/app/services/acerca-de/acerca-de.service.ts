import { Injectable } from '@angular/core';
import { AcercaDeModel } from 'src/app/Models/AcercaDeModel';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  acercaDe: AcercaDeModel[] = []

  constructor() { }

getAllAcercaDe(): AcercaDeModel[] {
  this.acercaDe.push ( new AcercaDeModel ('Pablo Vedelago', 'Aca va mi descripcion', 'Desarrollador Full Stack Jr', 'urlfotoperfil'))
 
  return this.acercaDe;
}
}
