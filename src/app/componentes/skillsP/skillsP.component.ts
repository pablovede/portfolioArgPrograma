import { Component, OnInit } from '@angular/core';
import { SkillsModel } from 'src/app/Models/SkillsModel';
import { SkillsService } from 'src/app/services/skills/skills.service';

@Component({
  selector: 'app-skillsP',
  templateUrl: './skillsP.component.html',
  styleUrls: ['./skillsP.component.css']
})
export class SkillsPComponent implements OnInit {

  skills: SkillsModel[] = []

  constructor(private skillsService:SkillsService) { }

  ngOnInit(): void {
    this.getAllSkills()
  }

  getAllSkills():void {
    this.skills = this.skillsService.getAllSkills()
  }
}
