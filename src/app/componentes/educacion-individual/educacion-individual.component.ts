import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EducacionModel } from 'src/app/Models/EducacionModel';

@Component({
  selector: 'app-educacion-individual',
  templateUrl: './educacion-individual.component.html',
  styleUrls: ['./educacion-individual.component.css']
})
export class EducacionIndividualComponent implements OnInit{
 
  // como chota hago para importar los parametros que irian despues de -new EducacionModel- directamente del servicio????

  @Input() educacion: EducacionModel = new EducacionModel ()
  
  constructor () {}

  ngOnInit(): void {
    
  }

   }

