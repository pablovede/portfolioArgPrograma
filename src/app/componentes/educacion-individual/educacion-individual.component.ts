import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EducacionModel } from 'src/app/Models/EducacionModel';

@Component({
  selector: 'app-educacion-individual',
  templateUrl: './educacion-individual.component.html',
  styleUrls: ['./educacion-individual.component.css']
})
export class EducacionIndividualComponent implements OnInit{

  @Input() educacionIndi: EducacionModel = new EducacionModel ()

  constructor () {}

  ngOnInit(): void {
    
  }

   }

