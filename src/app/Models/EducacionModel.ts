export  class EducacionModel {

    tituloEstablecimiento: string
    titulo: string
    fechaInicio: Date
    fechaFinalizacion: Date
    logo: string

    constructor(tituloEstablecimiento:string = "" , titulo:string = "" , fechaInicio:Date, fechaFinalizacion:Date, logo: string){
        this.tituloEstablecimiento = tituloEstablecimiento;
        this.titulo = titulo
        this.fechaInicio = fechaInicio;
        this.fechaFinalizacion = fechaFinalizacion;
        this.logo = logo
    }
    }