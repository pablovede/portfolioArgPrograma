export class EducacionIndividual {

    tituloEstablecimiento:string
    lugar: string
    fecha: string
    descripcion: string

    constructor (tituloEstablecimiento:string = "" , lugar:string = "" , fecha:string, descripcion: string ) {
        this.tituloEstablecimiento = tituloEstablecimiento
        this.lugar = lugar
        this.fecha = fecha
        this.descripcion = descripcion
    }
}