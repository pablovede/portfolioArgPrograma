export  class SkillsModel {

    nombreSkill: string
    porcentaje: number

    constructor(nombreSkill: string = "" , porcentaje: number = 0) {
        this.nombreSkill = nombreSkill;
        this.porcentaje = porcentaje
    }
    }