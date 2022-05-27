import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from 'src/app/Models/Persona';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  public personas:Persona [];
  public editarPersona:Persona;
  public eliminarPersona:Persona;

  constructor(public personaService: PersonaService) {}

  ngOnInit(): void {
    this.obtenerPersonas();
  } 

  public obtenerPersonas(){
    this.personaService.getPersonas().subscribe(data => {this.personas = data;});
   }
  
   public onOpenModal(persona:Persona, mode:String): void {
     const container = document.getElementById('main-container')
     const button = document.createElement("button");
     button.type='button';
     button.style.display='none';
     button.setAttribute('data-toggle', 'modal');
      if(mode === 'agregar'){
       button.setAttribute('data-target', '#agregarPersonaModal');
      }
     if (mode === 'editar') {
       this.editarPersona = persona;
       button.setAttribute('data-target', "#editarPersonaModal");
     }
     if (mode === 'eliminar') {
       this.eliminarPersona = persona;
      button.setAttribute('data-target', "#eliminarPersonaModal");
     }
     container?.appendChild(button);
     button.click();
   }
  
   public onEditarPersona(persona:Persona): void {
    this.personaService.editarPersona(persona).subscribe(
    (data: Persona) => {
      console.log(data);
      this.obtenerPersonas();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    },
    )
  }



   public onAgregarPersona(addForm:NgForm): void {
     document.getElementById('agregar-persona-form').click();
     this.personaService.registrarPersona(addForm.value).subscribe(
     (data: Persona) => {
       console.log(data);
      this.obtenerPersonas();
       addForm.reset();
     },
     (error: HttpErrorResponse) => {
    alert(error.message);
       addForm.reset();
     },
     )
   }
  

  
  public onEliminarPersona(id:number): void {
     this.personaService.eliminarPersona(id).subscribe(
    (data: void) => {
       this.obtenerPersonas();
   },
    (error: HttpErrorResponse) => {
      alert(error.message);
     },
     )
 }

}
