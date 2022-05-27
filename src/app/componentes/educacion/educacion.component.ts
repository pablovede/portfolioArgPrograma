import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { EducacionModel } from 'src/app/Models/EducacionModel';
import { EducacionService } from 'src/app/services/educacion/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{

  public educaciones:EducacionModel [];
  public editarEducacion:EducacionModel
  public eliminarEducacion: EducacionModel;

  constructor(public educacionService: EducacionService) {}

  ngOnInit(): void {
    this.obtenerEducaciones();
   
  } 

public obtenerEducaciones(){
  this.educacionService.getEducacion().subscribe(data => {this.educaciones = data;});
 }

 public onOpenModal(educacion:EducacionModel, mode:String): void {
   const container = document.getElementById('main-container')
   const button = document.createElement("button");
   button.type='button';
   button.style.display='none';
   button.setAttribute('data-toggle', 'modal');
   if(mode === 'agregar'){
     button.setAttribute('data-target', '#agregarEducacionModal');
   }
   if (mode === 'editar') {
     this.editarEducacion = educacion;
     button.setAttribute('data-target', "#editarEducacionModal");
   }
   if (mode === 'eliminar') {
    this.eliminarEducacion = educacion;
    button.setAttribute('data-target', "#eliminarEducacionModal");
   }
   container?.appendChild(button);
   button.click();
 }

public onAgregarEducacion(addForm:NgForm): void {
  document.getElementById('agregar-educacion-form').click();
  this.educacionService.registrarEducacion(addForm.value).subscribe(
  (data: EducacionModel) => {
    console.log(data);
    this.obtenerEducaciones();
    addForm.reset();
  },
  (error: HttpErrorResponse) => {
    alert(error.message);
    addForm.reset();
  },
  )
}

public onEditarEducacion(educacion:EducacionModel): void {
  this.educacionService.editarEducacion(educacion).subscribe(
  (data: EducacionModel) => {
    console.log(data);
    this.obtenerEducaciones();
  },
  (error: HttpErrorResponse) => {
    alert(error.message);
  },
  )
}

public onEliminarEducacion(id:number): void {
  this.educacionService.eliminarEducacion(id).subscribe(
  (data: void) => {
    console.log(data);
    this.obtenerEducaciones();
  },
  (error: HttpErrorResponse) => {
    alert(error.message);
  },
  )
}

}
