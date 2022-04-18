export  class AcercaDeModel {

    nombre: string
    descripcion: string
    titulo: string
    fotoPerfil: string


    constructor(nombre:string = '', descripcion:string = "" , titulo:string = "" , fotoPerfil:string = ""){
        this.descripcion = descripcion;
        this.titulo = titulo;
        this.fotoPerfil = fotoPerfil;
        this.nombre = nombre;
    }
    }