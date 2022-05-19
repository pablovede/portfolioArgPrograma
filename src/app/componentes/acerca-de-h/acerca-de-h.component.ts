import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/Models/Persona';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-acerca-de-h',
  templateUrl: './acerca-de-h.component.html',
  styleUrls: ['./acerca-de-h.component.css']
})
export class AcercaDeHComponent implements OnInit {

  acercaDe:Persona = new Persona("", "", "", "");

  constructor(public personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.acercaDe = data})
  }
}
