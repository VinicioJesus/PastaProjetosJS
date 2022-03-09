"use strict";

//Objetos tem caracteristicas(atributos)

//VARIÁVEL
// É um espaço reservado na memória,
// com a finalidade de armazenar dados
// que podem ser de varios tipos,
// números, booleano e string.

//ARRAY
//É UM conjunto de dados

// PROPRIEDADE
// É a caracteristica de um objeto, como tamanho e cor

// MÉTODO
// É um conjunto de propriedades e métodos

console.log("ana".length);
console.log("ana"[length]);

const alunos2 = {
  aluno1: ["ana", "ana@gmail.com", 2, 3, 4],
};

const alunos = [
  {
    nome: "ana",
    email: "ana@gmail.com",
    nota: 7,
    nota2: 8,
  },
  {
    nome: "maria",
    email: "maria@gmail.com",
    nota: 7,
    nota2: 10,
  },
  {
    nome: "felipe",
    email: "felipe@gmail.com",
    nota: 5,
    nota2: 8,
  },
  {
    nome: "joao",
    email: "joao@gmail.com",
    nota: 8,
    nota2: 7,
  },
];
//nome é propriedade
//criando um objeto que é definido por chaves
const aluno = {
  nome: "ana",
  email: "ana@gmail.com",
  nota: 5,
  nota2: 4,
};

console.log(alunos[3].nome);
