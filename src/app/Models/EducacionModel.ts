export class EducacionModel {

    tituloEstablecimiento: string
    lugar: string
    fechaInicio: Date
    fechaFinalizacion: Date
    descripcion: string

    constructor(tituloEstablecimiento:string = "", lugar:string = "", fechaInicio:Date, fechaFinalizacion:Date, descripcion: string = ""){
        this.tituloEstablecimiento = tituloEstablecimiento
        this.lugar = lugar
        this.fechaInicio = fechaInicio
        this.fechaFinalizacion = fechaFinalizacion
        this.descripcion = descripcion
    }
    }