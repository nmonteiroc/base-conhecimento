let cardContainer = document.querySelector(".card-container");
let dados = [];

async function iniciarBusca() {
    // Se os dados ainda não foram carregados, busca do JSON
    if (dados.length === 0) {
        let resposta = await fetch("data.json");
        dados = await resposta.json();
    }

    // Pega o valor do campo de busca e converte para minúsculas
    let termoBusca = document.getElementById("campo-busca").value.toLowerCase();

    // Filtra os dados com base no termo de busca
    const resultados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(termoBusca) || 
        dado.descricao.toLowerCase().includes(termoBusca)
    );

    renderizarCards(resultados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa os cards existentes antes de renderizar novos
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome} </h2>
        <p>${dado.data_criacao} </p>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank"> Saiba mais</a>
        `
        cardContainer.appendChild(article);
    }
}