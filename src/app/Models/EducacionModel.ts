export  class EducacionModel {

    id?: number
    establecimiento: string
    titulo: string
    fecha: string
    logo: string

    constructor(establecimiento: string = '', titulo:string = "" , fecha:string, logo: string){
        this.titulo = titulo;
        this.fecha = fecha;
        this.logo = logo;
        this.establecimiento = establecimiento;
    }
    }