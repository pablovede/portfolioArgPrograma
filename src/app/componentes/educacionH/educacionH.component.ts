import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EducacionModel } from 'src/app/Models/EducacionModel';

@Component({
  selector: 'app-educacionH',
  templateUrl: './educacionH.component.html',
  styleUrls: ['./educacionH.component.css']
})
export class EducacionHComponent implements OnInit{
 

  @Input() educacion:EducacionModel;
  
  constructor () {}

  ngOnInit(): void {
    
  }

   }

