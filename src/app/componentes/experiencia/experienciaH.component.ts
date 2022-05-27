import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExperienciaModel } from 'src/app/Models/ExperienciaModel';
import { ExperienciaService } from 'src/app/services/experiencia/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public experiencias:ExperienciaModel [];
  public editarExperiencia:ExperienciaModel
  public eliminarExperiencia: ExperienciaModel;

  constructor(public experienciaService: ExperienciaService) {}

  ngOnInit(): void {
    this.obtenerExperiencias();
  } 

  public obtenerExperiencias(){
    this.experienciaService.getExperiencia().subscribe(data => {this.experiencias = data;});
   }
  
   public onOpenModal(experiencia:ExperienciaModel, mode:String): void {
     const container = document.getElementById('main-container')
     const button = document.createElement("button");
     button.type='button';
     button.style.display='none';
     button.setAttribute('data-toggle', 'modal');
     if(mode === 'agregar'){
       button.setAttribute('data-target', '#agregarExperienciaModal');
     }
     if (mode === 'editar') {
       this.editarExperiencia = experiencia;
       button.setAttribute('data-target', "#editarExperienciaModal");
     }
     if (mode === 'eliminar') {
      this.eliminarExperiencia = experiencia;
      button.setAttribute('data-target', "#eliminarExperienciaModal");
     }
     container?.appendChild(button);
     button.click();
   }
  
  public onAgregarExperiencia(addForm:NgForm): void {
    document.getElementById('agregar-experiencia-form').click();
    this.experienciaService.registrarExperiencia(addForm.value).subscribe(
    (data: ExperienciaModel) => {
      console.log(data);
      this.obtenerExperiencias();
      addForm.reset();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    },
    )
  }
  
  public onEditarExperiencia(experiencia:ExperienciaModel): void {
    this.experienciaService.editarExperiencia(experiencia).subscribe(
    (data: ExperienciaModel) => {
      console.log(data);
      this.obtenerExperiencias();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    },
    )
  }
  
  public onEliminarExperiencia(id:number): void {
    this.experienciaService.eliminarExperiencia(id).subscribe(
    (data: void) => {
      console.log(data);
      this.obtenerExperiencias();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    },
    )
  }
  
  }
  

