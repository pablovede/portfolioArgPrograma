import { Component, OnInit } from '@angular/core';
import { SkillModel } from 'src/app/Models/SkillModel';
import { SkillService } from 'src/app/services/skills/skills.service';

@Component({
  selector: 'app-skillsP',
  templateUrl: './skillsP.component.html',
  styleUrls: ['./skillsP.component.css']
})
export class SkillsPComponent implements OnInit {

  skill:SkillModel = new SkillModel("", );

  constructor(public skillService: SkillService) {}

  ngOnInit(): void {
    this.skillService.getSkill().subscribe(data => {this.skill = data})
  }
}
