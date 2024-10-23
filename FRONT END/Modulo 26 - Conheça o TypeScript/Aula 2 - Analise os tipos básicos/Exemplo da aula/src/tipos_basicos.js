"use strict";
let estaChovendo = false;
estaChovendo = true;
let idade = 27;
let altura = 1.75;
const nacionalidade = "brasileiro";
const colegas = ["Matheus", "Denis", "João"];
const tecnologias = ["JavaScript", "TypeScript", "NodeJS"];
const notas = [10, 9, 8, 7]; // ReadonlyArray não permite alterações no array (push, pop, shift, unshift, splice, etc)
const lista = ["Lucelho", true, 28]; // Tupla
let idadeDoLucelho = 25; // Union Types (permite que a variável seja de mais de um tipo)
idadeDoLucelho = "vinte e cinco";
let dadosDaApi; // Qualquer tipo (não recomendado)
dadosDaApi = 10;
dadosDaApi = "dez";
dadosDaApi = true;
dadosDaApi = [10, "dez", true];
