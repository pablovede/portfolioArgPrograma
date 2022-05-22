import { Component, Input, OnInit } from '@angular/core';
import { SkillModel } from 'src/app/Models/SkillModel';
@Component({
  selector: 'app-skillsH',
  templateUrl: './skillsH.component.html',
  styleUrls: ['./skillsH.component.css']
})
export class SkillsHComponent implements OnInit {

  @Input() skills:SkillModel;

  constructor() { }

  ngOnInit(): void {
  }

}
