import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SkillModel } from 'src/app/Models/SkillModel';
import { SkillService } from 'src/app/services/skills/skills.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills:SkillModel [];
  public editarSkill:SkillModel;
  public eliminarSkill: SkillModel;

  constructor(public skillService: SkillService) {}

  ngOnInit(): void {
    this.obtenerSkills();
  } 

  public obtenerSkills(){
    this.skillService.getSkills().subscribe(data => {this.skills = data;});
   }
  
   public onOpenModal(skill:SkillModel, mode:String): void {
     const container = document.getElementById('main-container')
     const button = document.createElement("button");
     button.type='button';
     button.style.display='none';
     button.setAttribute('data-toggle', 'modal');
     if(mode === 'agregar'){
       button.setAttribute('data-target', '#agregarSkillModal');
     }
     if (mode === 'editar') {
       this.editarSkill = skill;
       button.setAttribute('data-target', "#editarSkillModal");
     }
     if (mode === 'eliminar') {
      this.eliminarSkill = skill;
      button.setAttribute('data-target', "#eliminarSkillModal");
     }
     container?.appendChild(button);
     button.click();
   }
  
  public onAgregarSkill(addForm:NgForm): void {
    document.getElementById('agregar-proyecto-form').click();
    this.skillService.registrarSkill(addForm.value).subscribe(
    (data: SkillModel) => {
      console.log(data);
      this.obtenerSkills();
      addForm.reset();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    },
    )
  }
  
  public onEditarSkill(skill:SkillModel): void {
    this.skillService.editarSkill(skill).subscribe(
    (data: SkillModel) => {
      console.log(data);
      this.obtenerSkills();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    },
    )
  }
  
  public onEliminarSkill(id:number): void {
    this.skillService.eliminarSkill(id).subscribe(
    (data: void) => {
      console.log(data);
      this.obtenerSkills();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    },
    )
  }
  
  }

