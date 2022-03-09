"use strict"
//usamos o fetch para fazer requisições, ele pede um URL

// assincrona é paralela
const pesquisarCEP = async (cep) => {

  /* Template String é o assento invertido*/


  const url = `https://viacep.com.br/ws/06655830/json/`
// Await -> espera o fetch resolver para ele ir para a proxima linha
  const response = await fetch(url)
//não coloque o await em todo lugar, existe lugar certo pra se usar
  const data = await response.json()
// A gente acessa os objetos com o ponto
  console.log(data)
}

pesquisarCEP('06655360')
