import { Component, OnInit } from '@angular/core';
import { EducacionIndividual } from 'src/app/Models/EducacionIndividual';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: EducacionIndividual[] = []

  constructor() { }

  ngOnInit(): void {
this.educacion.push (new EducacionIndividual ("UNVM", "Villa Maria", "2015/03/01", "La licenciatura"))
}

}
