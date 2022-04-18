import { Component, OnInit } from '@angular/core';
import { AcercaDeModel } from 'src/app/Models/AcercaDeModel';
import { AcercaDeService } from 'src/app/services/acerca-de/acerca-de.service';

@Component({
  selector: 'app-acerca-de-p',
  templateUrl: './acerca-de-p.component.html',
  styleUrls: ['./acerca-de-p.component.css']
})
export class AcercaDePComponent implements OnInit {

  acercaDe: AcercaDeModel[] = []

  constructor (private acercaDeService:AcercaDeService) {}

  ngOnInit(): void {
    this.getAllAcercaDe()
  }

  getAllAcercaDe(): void {
    this.acercaDe = this.acercaDeService.getAllAcercaDe()
  }
}
