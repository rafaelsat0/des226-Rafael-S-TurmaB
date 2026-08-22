let entrada = require('prompt-sync')();

let nome = 'Rafael';
let idade = 19;
let trabalho = true; // false -- comentario de 1 linha 
let endereco = {
    rua: "Brasil",
    num: 30,
    bairro: 'Europa'

}


/*
Exemplo de comentario de 
mais de uma linha.
*/

let funcao = () => console.log('oi')

console.log('TIpos de variaveis');
console.log('Variavél: nome: ' + typeof(nome)); 
console.log('Variavél: nome: ' + typeof(idade)); 
console.log('Variavél: nome: ' + typeof(trabalho)); 
console.log('Variavél: nome: ' + typeof(endereco)); 
console.log('Variavél: nome: ' + typeof(funcao)); 

let nomeDigitado;
let idadeDigitada;
let trabalhoDigitado;

console.log();

 nomeDigitado = entrada("Digite seu nome: ");
 idadeDigitada = entrada("Qual sua idade: ");
 trabalhoDigitado = entrada("informe seu trabalho : ");

// Mostrando valor e tipo das variaveis
 
console.log('Nome: ' + nomeDigitado + ' - Tipo: ' + typeof nomeDigitado);
console.log('Nome: ' + nomeDigitado + ' - Tipo: ' + typeof trabalhoDigitado);
console.log('Nome: ' + nomeDigitado + ' - Tipo: ' + typeof idadeDigitada);