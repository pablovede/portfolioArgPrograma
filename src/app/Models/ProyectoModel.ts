export  class ProyectoModel {

    nombreProyecto: string
    fechaRealizacion : Date
    descripcion: string
    link: string

    constructor(nombreProyecto: string = '', fechaRealizacion: Date, descripcion: string = '', link: string = '') {
        this.nombreProyecto = nombreProyecto;
        this.fechaRealizacion = fechaRealizacion
        this.descripcion = descripcion
        this.link = link
    }
    }