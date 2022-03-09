"use strict";

const db = [
  {
    id: 1,
    nome: "Microfone Kingston",
    descricao: "Microfone Kingston HyperX QuadCast USB",
    avaliacao: 5,
    preco: 999.99,
    parcelamento: "ou 10x de 99.99 sem juros",
    imagem: "./img/microfone_kingston_hyperx_quadcast.png",
  },
  {
    id: 2,
    nome: "Monitor AOC",
    descricao: "Monitor Gamer Curvo 240Hz Full HD 27” AOC",
    avaliacao: 3,
    preco: 2500,
    parcelamento: "ou 10x de 250 sem juros",
    imagem: "./img/monitor_gamer_curvo.png",
  },
  {
    id: 3,
    nome: "Mouse Logitech",
    descricao: "Mouse Sem Fio M170 Nano LOGITECH Prata",
    avaliacao: 2,
    preco: 350,
    parcelamento: "ou 10x de 35 sem juros",
    imagem: "./img/mouse.png",
  },
];
const definirAvaliacao = (qtdCheias) => {
  const qtdVazias = 5 - qtdCheias;

  return "&starf;".repeat(qtdCheias) + "&starf;".repeat(qtdVazias);
};
const criarCard = (produtos) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `

    <div class="card-image-container">
        <img src="${produtos.imagem}" alt="" class="card-image" />
    </div>
    <span class="descricao">
        ${produtos.descricao}
    </span>
    <span class="card-avaliacao">
        ${definirAvaliacao(produtos.avaliacao)}
    </span>
    <span class="card-preco"> 
        ${produtos.preco}
    </span>
    <span class="card-parcelamento">
        ${produtos.parcelamento}
    </span> `;
  return card;
};
const carregarProdutos = (produtos) => {
  const container = document.querySelector(".card-container");
  const cards = produtos.map(criarCard);
  container.replaceChildren(...cards);
};

carregarProdutos(db);
