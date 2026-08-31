let entrada = require('prompt-sync')();

const nome = entrada("Digite o nome do produto: ");
const preco = Number(entrada("Digite o preço do produto: "));
const disponivel = true;

const array_produt = ["Eletronico", "Perifericos", "Gamer"];

const produto = {
    nome: nome,
    preco: preco,
    disponivel: disponivel,
    tags: array_produt
};

console.log("========Ficha de Produto========");
    console.log("Nome:", produto.nome);
        console.log("Preço:", produto.preco);
            console.log("Disponibilidade", produto.disponivel);
                console.log("Tags arrays", produto.tags);

console.log("Tipo de variável produto:", typeof produto);
console.log("Tipo de array tags:", typeof produto.tags);