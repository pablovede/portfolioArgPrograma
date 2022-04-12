import { Component, OnInit } from '@angular/core';
import { ExperienciaModel } from 'src/app/Models/ExperienciaModel';
import { ExperienciaService } from 'src/app/services/experiencia/experiencia.service';

@Component({
  selector: 'app-experienciaP',
  templateUrl: './experienciaP.component.html',
  styleUrls: ['./experienciaP.component.css']
})
export class ExperienciaPComponent implements OnInit {

  experiencia: ExperienciaModel[] = []

  constructor(private experienciaService:ExperienciaService) { }

  ngOnInit(): void {
    this.getAllExperiencia()
  }

  getAllExperiencia():void {
    this.experiencia = this.experienciaService.getAllExperiencia()
  }

}
