import { EducacionService } from 'src/app/services/educacion.service';
import { Component, OnInit } from '@angular/core';
import { EducacionModel } from 'src/app/Models/EducacionModel';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: EducacionModel[] = []

  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
    this.getAllEducacion()
    
}

getAllEducacion():void {
  this.educacion = this.educacionService.getAllEducacion()
}

}
