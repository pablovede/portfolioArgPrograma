import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProyectoModel } from 'src/app/Models/ProyectoModel';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  
  public proyectos:ProyectoModel [];
  public editarProyecto:ProyectoModel;
  public eliminarProyecto: ProyectoModel;

  constructor(public proyectoService: ProyectoService) {}

  ngOnInit(): void {
    this.obtenerProyectos();
  } 

  public obtenerProyectos(){
    this.proyectoService.getProyectos().subscribe(data => {this.proyectos = data;});
   }
  
   public onOpenModal(proyecto:ProyectoModel, mode:String): void {
     const container = document.getElementById('main-container')
     const button = document.createElement("button");
     button.type='button';
     button.style.display='none';
     button.setAttribute('data-toggle', 'modal');
     if(mode === 'agregar'){
       button.setAttribute('data-target', '#agregarProyectoModal');
     }
     if (mode === 'editar') {
       this.editarProyecto = proyecto;
       button.setAttribute('data-target', "#editarProyectoModal");
     }
     if (mode === 'eliminar') {
      this.eliminarProyecto = proyecto;
      button.setAttribute('data-target', "#eliminarProyectoModal");
     }
     container?.appendChild(button);
     button.click();
   }
  
  public onAgregarProyecto(addForm:NgForm): void {
    document.getElementById('agregar-proyecto-form').click();
    this.proyectoService.registrarProyecto(addForm.value).subscribe(
    (data: ProyectoModel) => {
      console.log(data);
      this.obtenerProyectos();
      addForm.reset();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    },
    )
  }
  
  public onEditarProyecto(proyecto:ProyectoModel): void {
    this.proyectoService.editarProyecto(proyecto).subscribe(
    (data: ProyectoModel) => {
      console.log(data);
      this.obtenerProyectos();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    },
    )
  }
  
  public onEliminarProyecto(id:number): void {
    this.proyectoService.eliminarProyecto(id).subscribe(
    (data: void) => {
      console.log(data);
      this.obtenerProyectos();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    },
    )
  }
  
  }
