export  class EducacionModel {

    tituloEstablecimiento: string
    titulo: string
    fechaInicio: Date
    fechaFinalizacion: Date

    constructor(tituloEstablecimiento:string = "" , titulo:string = "" , fechaInicio:Date, fechaFinalizacion:Date){
        this.tituloEstablecimiento = tituloEstablecimiento;
        this.titulo = titulo
        this.fechaInicio = fechaInicio;
        this.fechaFinalizacion = fechaFinalizacion;
    }
    }