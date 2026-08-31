const entrada = require('prompt-sync')();

let num1 = Number(entrada("Digite um numero: "));
let num2 = Number(entrada("Digite um numero: "));


let soma = num1 + num2;

console.log(soma)

console.log("O typeof de Num1 é: ", typeof num1);
console.log("O typeof de Soma é: ", typeof soma);

/*O condigo faz a concatenação dos valores porque quando você passa 
num1 = entrada("") você está passando o valor como uma string, e você precisa utilizar 
Number para converter a String em Numero, ai sim ele vai somar.*/