import { Injectable } from '@angular/core';
import { SkillsModel } from 'src/app/Models/SkillsModel';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills: SkillsModel [] = []

  constructor() { }

  getAllSkills(): SkillsModel [] {
    this.skills.push (new SkillsModel ('Italiano', 30))
    this.skills.push (new SkillsModel ('Ingles', 100))

    return this.skills
  }
}
