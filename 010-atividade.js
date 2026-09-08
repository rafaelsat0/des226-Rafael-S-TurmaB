const promptSync = require('prompt-sync')();

// Instancia a data atual
const dataAtual = new Date();

//  Solicita nome e matrícula ao aluno
const nome = promptSync('Digite seu nome: ');
const matricula = promptSync('Digite sua matrícula: ');


const disciplinas = ['Estrutura de Dados', 'Banco de Dados', 'Desenvolvimento Web'];

const registrarAcesso = (nome, matricula, disciplinas, data) => {
  const dataFormatada = data.toLocaleDateString('pt-BR');
  const horaFormatada = data.toLocaleTimeString('pt-BR');

  console.log('----- REGISTRO DE ACESSO AO LABORATÓRIO -----');
  console.log(`Aluno: ${nome}`);
  console.log(`Matrícula: ${matricula}`);
  console.log(`Disciplinas cursadas: ${disciplinas.join(', ')}`);
  console.log(`Data do registro: ${dataFormatada}`);
  console.log(`Hora do registro: ${horaFormatada}`);
  console.log('----------------------------------------------');
};


registrarAcesso(nome, matricula, disciplinas, dataAtual);

console.log(`Tipo da variável 'dataAtual': ${typeof dataAtual}`);
console.log(`Tipo da variável 'registrarAcesso': ${typeof registrarAcesso}`);