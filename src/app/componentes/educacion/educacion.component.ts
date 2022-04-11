import { Component, OnInit } from '@angular/core';
import { EducacionModel } from 'src/app/Models/EducacionModel';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: EducacionModel[] = []

  constructor() {}

  ngOnInit(): void {
    let educacion1 = new EducacionModel ("UNVM", "Villa Maria", new Date (2015, 0o2), new Date (2022, 0o2), "La licenciatura")
this.educacion.push (educacion1)
}

}
