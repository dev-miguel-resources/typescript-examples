// Interfaces
interface Medic {
    name?: string
    lastname: string
    codMed: number // viene implícito el !
    status: string | boolean
}

const medic: Medic = { lastname: "Chamorro", codMed: 23, name: "Miguel", status: "active" }
console.log(medic)

/*class Medic {
    name: string
    lastname: string
    codMed: number

    constructor({ name, lastname, codMed }: Medic) {
        this.name = name
        this.lastname = lastname
        this.codMed = codMed
    }
}

const medic: Medic = new Medic({ lastname: "Villagran", name: "Jaime", codMed: 12 })
console.log(medic)
//console.log(medic.name)*/

/*interface Person {
    name: string
    lastname: string
}
interface Medic {
    codMed: number
    person: Person
}*/

/*interface Medic {
    name: string
    lastname: string
    age: number
}
interface Medic {
    codMed: number
}*/

/*interface Person {
    initialize(): void
}

class Medic implements Person {

initialize(): void {
throw new Error("Method not implemented.")
}

}*/

