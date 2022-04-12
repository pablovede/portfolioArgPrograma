import { EducacionService } from 'src/app/services/educacion/educacion.service';
import { Component, OnInit } from '@angular/core';
import { EducacionModel } from 'src/app/Models/EducacionModel';

@Component({
  selector: 'app-educacionP',
  templateUrl: './educacionP.component.html',
  styleUrls: ['./educacionP.component.css']
})
export class EducacionPComponent implements OnInit {

  educacion: EducacionModel[] = []

  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
    this.getAllEducacion()
    
}

getAllEducacion():void {
  this.educacion = this.educacionService.getAllEducacion()
}

}
