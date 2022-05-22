export  class SkillModel {

    id?: number
    nombre: string
    porcentaje: number

    constructor(nombre: string = "" , porcentaje: number = 0) {
        this.nombre = nombre;
        this.porcentaje = porcentaje
    }
    }