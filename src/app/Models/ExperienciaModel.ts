export  class ExperienciaModel {

    tituloPuesto: string
    lugar: string | null
    fechaInicio: Date
    fechaFinalizacion: Date
    descripcion: string

    constructor(tituloPuesto: string = "" , lugar: string = "" , fechaInicio:Date, fechaFinalizacion:Date, descripcion: string){
        this.tituloPuesto = tituloPuesto;
        this.lugar = lugar
        this.fechaInicio = fechaInicio;
        this.fechaFinalizacion = fechaFinalizacion;
        this.descripcion = descripcion
    }
    }