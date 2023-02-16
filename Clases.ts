// Ejemplos de las bases de TS
class Medic {
    // atributos
    name: string
    lastname!: string // obligatorio pasar el valor del tipo correspodiente de forma requerida
    codMed?: number // soporta el tipo || null || undefined 
    // height: any // any: puedes asignar y cambiar el tipo sin limitación
    //readonly fullname: string*/ // propiedad de solo lectura

    // forma 1
    // name: "Gabriel", lastname: "Amaru", codMed: 12
    constructor(name: string, lastname: string, codMed: number) { 
        this.name = name
        this.lastname = lastname
        this.codMed = codMed
        //this.fullname = `${this.name} ${this.lastname}`
    }

    // forma 2
    /*constructor(public name: string, public lastname: string, public codMed: number) {
       
    }*/

    // forma 3
    /*name = "Gabriel"
    lastname = "Amaru"
    codMed = 12

    constructor(name: string, lastname: string, codMed: number) { 
        this.name = name
        this.lastname = lastname
        this.codMed = codMed
        //this.fullname = `${this.name} ${this.lastname}`
    }*/

    /* // El constructor es lo primero que se manda a llamar cuando instancias una clase
    constructor() {
        this.initialize()
    }

    // métodos
    initialize() {
        this.name = "Gabriel"
        this.lastname = "Amaru"
        this.codMed = 15
    }*/

    
}

const medic: Medic = new Medic("Yorman", "Amaro", 12)
console.log(medic)
//console.log(medic.name)