import { Component, Input, OnInit } from '@angular/core';
import { SkillsModel } from 'src/app/Models/SkillsModel';
@Component({
  selector: 'app-skillsH',
  templateUrl: './skillsH.component.html',
  styleUrls: ['./skillsH.component.css']
})
export class SkillsHComponent implements OnInit {

  @Input() skills:SkillsModel;

  constructor() { }

  ngOnInit(): void {
  }

}
