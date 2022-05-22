import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EducacionModel } from 'src/app/Models/EducacionModel';
import { EducacionService } from 'src/app/services/educacion/educacion.service';

@Component({
  selector: 'app-educacionH',
  templateUrl: './educacionH.component.html',
  styleUrls: ['./educacionH.component.css']
})
export class EducacionHComponent implements OnInit{

  educaciones:EducacionModel [];

  constructor(public educacionService: EducacionService) {}

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe(data => {this.educaciones = data;})
  } 

   }

