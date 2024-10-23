let estaChovendo: boolean = false

estaChovendo = true

let idade: number = 27

let altura: number = 1.75

const nacionalidade: string = "brasileiro"

const colegas: string[] = ["Matheus", "Denis", "João"]
const tecnologias: Array<string> = ["JavaScript", "TypeScript", "NodeJS"]
const notas: ReadonlyArray<number> = [10, 9, 8, 7] // ReadonlyArray não permite alterações no array (push, pop, shift, unshift, splice, etc)

const lista: [nome: string, estaEstudando: boolean, idade: number] = ["Lucelho", true, 28] // Tupla

let idadeDoLucelho: number | string = 25 // Union Types (permite que a variável seja de mais de um tipo)
idadeDoLucelho = "vinte e cinco"

let dadosDaApi: any // Qualquer tipo (não recomendado)
dadosDaApi = 10
dadosDaApi = "dez"
dadosDaApi = true
dadosDaApi = [10, "dez", true]

let curso = "Front-end" // tipagem implícita

let curso2: string = "Front-end" // tipagem explícita
