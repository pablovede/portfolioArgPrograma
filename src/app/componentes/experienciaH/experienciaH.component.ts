import { Component, Input, OnInit } from '@angular/core';
import { ExperienciaModel } from 'src/app/Models/ExperienciaModel';

@Component({
  selector: 'app-experienciaH',
  templateUrl: './experienciaH.component.html',
  styleUrls: ['./experienciaH.component.css']
})
export class ExperienciaHComponent implements OnInit {

  @Input() experiencia:ExperienciaModel;

  constructor() { }

  ngOnInit(): void {
  }

}
