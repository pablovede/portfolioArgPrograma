import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/Models/Educacion';

@Component({
  selector: 'app-educacion-individual',
  templateUrl: './educacion-individual.component.html',
  styleUrls: ['./educacion-individual.component.css']
})
export class EducacionIndividualComponent implements OnInit{
 
  // como chota hago para importar los parametros que irian despues de -new EducacionModel- directamente del servicio???? con strictPropertyInitialization": false

  @Input() educacion:Educacion;
  
  constructor () {}

  ngOnInit(): void {
    
  }

   }

