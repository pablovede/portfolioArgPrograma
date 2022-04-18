import { Component, Input, OnInit } from '@angular/core';
import { ProyectoModel } from 'src/app/Models/ProyectoModel';

@Component({
  selector: 'app-proyectos-h',
  templateUrl: './proyectos-h.component.html',
  styleUrls: ['./proyectos-h.component.css']
})
export class ProyectosHComponent implements OnInit {

  @Input() proyecto:ProyectoModel

  constructor() { }

  ngOnInit(): void {
  }

}
