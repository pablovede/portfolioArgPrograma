import { Component, Input, OnInit } from '@angular/core';
import { AcercaDeModel } from 'src/app/Models/AcercaDeModel';

@Component({
  selector: 'app-acerca-de-h',
  templateUrl: './acerca-de-h.component.html',
  styleUrls: ['./acerca-de-h.component.css']
})
export class AcercaDeHComponent implements OnInit {

  @Input() acercaDe:AcercaDeModel;

  constructor() { }

  ngOnInit(): void {
  }

}
