const promptSync = require('prompt-sync')(); // NÂO ESQUECER ISSO

let nome = promptSync("Digite seu nome: ");
let idade = promptSync("Digite sua idade: ");
let trabalho = promptSync("Digite seu trabalho: ");
let ano = promptSync("O ano que você nasceu: ");

console.log('');
console.log('----------------------')
console.log('Nome' + typeof(nome));
console.log('Idade' + typeof(idade));
console.log('Trabalho' + typeof(trabalho));
console.log('Ano' + typeof(ano));
console.log('----------------------')

