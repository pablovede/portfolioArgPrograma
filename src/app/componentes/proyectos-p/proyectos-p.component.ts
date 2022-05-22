import { Component, OnInit } from '@angular/core';
import { ProyectoModel } from 'src/app/Models/ProyectoModel';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';

@Component({
  selector: 'app-proyectos-p',
  templateUrl: './proyectos-p.component.html',
  styleUrls: ['./proyectos-p.component.css']
})
export class ProyectosPComponent implements OnInit {

  proyecto:ProyectoModel = new ProyectoModel("", "", "", "");

  constructor(public proyectoService: ProyectoService) {}

  ngOnInit(): void {
    this.proyectoService.getProyecto().subscribe(data => {this.proyecto = data})
  }
}
