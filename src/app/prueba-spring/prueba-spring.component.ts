import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../Models/Persona';
import { PortfolioService } from '../services/portfolio/portfolio.service';

@Component({
  selector: 'app-prueba-spring',
  templateUrl: './prueba-spring.component.html',
  styleUrls: ['./prueba-spring.component.css']
})
export class PruebaSpringComponent implements OnInit {

  pruebaSpring:Persona = new Persona("", "", "");

  constructor(public portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getPersona().subscribe(data => {this.pruebaSpring = data})
  }
}
  
  /* si queremos hacerlo como el Arg Programa invocando el service

  miPortfolio:any;
	constructor (private datosPortfolio:PortfolioService) {}
	
	ngOnInit(): void {
		this.datosPortfolio.obtenerDatos().subscribe(data => {
			console.log("Datos Personales"+ JSON.stringify(data));
			this.miPortfolio=data[0];
	
	});

*/

/* si queremos hacerlo como el tutorial de YT sin pasar x el service 

nombre = '';
constructor (private http: HttpClient) { }
  
  ngOnInit () {
    this.http.get("localhost:8080/ver/personas", {responseType: 'text'}).subscribe((resp:any) =>{
        this.nombre = resp;
    },
    (error:any) => {
      console.log(error)
    }
    )
  }

}
*/