export  class Persona {

    id?: number
    nombre: String
    apellido: String
    img: String
    cargo: String
    descripcion: String

    constructor(nombre: String, apellido: String, img:String, cargo: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.cargo = cargo;
        this.descripcion = this.descripcion;
    }
    }