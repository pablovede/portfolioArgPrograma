export  class ExperienciaModel {

    cargo: string
    lugar: string
    desde: string
    hasta: string
    descripcion: string

    constructor(cargo: string = "" , lugar: string = "" , fechaInicio:string, fechaFinalizacion:string, descripcion: string){
        this.cargo = cargo;
        this.lugar = lugar
        this.desde = fechaInicio;
        this.hasta = fechaFinalizacion;
        this.descripcion = descripcion
    }
    }