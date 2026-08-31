const entrada = require("prompt-sync")();

let CPF = entrada("Digite seu CPF: ");
const email = entrada("Digite seu Email: ");

const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const cpfValido = cpfRegex.test(CPF);
const emailValido = emailRegex.test(email);

console.log("CPF válido:", cpfValido);
console.log("E-mail válido:", emailValido);