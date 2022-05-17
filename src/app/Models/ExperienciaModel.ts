export  class ExperienciaModel {

    cargo: string
    lugar: string | null
    fechaInicio: Date
    fechaFinalizacion: Date
    descripcion: string

    constructor(cargo: string = "" , lugar: string = "" , fechaInicio:Date, fechaFinalizacion:Date, descripcion: string){
        this.cargo = cargo;
        this.lugar = lugar
        this.fechaInicio = fechaInicio;
        this.fechaFinalizacion = fechaFinalizacion;
        this.descripcion = descripcion
    }
    }