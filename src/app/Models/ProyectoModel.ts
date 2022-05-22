export  class ProyectoModel {

    nombre: string
    descripcion: string
    fecha : string
    link: string

    constructor(nombreProyecto: string = '', fecha: string= '', descripcion: string = '', link: string = '') {
        this.nombre = nombreProyecto;
        this.fecha = fecha
        this.descripcion = descripcion
        this.link = link
    }
    }