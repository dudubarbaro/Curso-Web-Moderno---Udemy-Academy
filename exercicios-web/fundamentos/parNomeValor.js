// par nome/valor
const saudacao = "Opa"; // contexto léxico 1

function exec() {
  const saudacao = "Falaaa"; // contexto léxico 2
  return saudacao;
}

// Objetos sáo grupos aninhados de pares nome/valor
const Cliente = {
  nome: "Eduardo",
  idade: 17,
  peso: 85,
  endereco: {
    logradouro: "R. Itabaiana",
    numero: 123,
  },
};

console.log(saudacao);
console.log(exec());
console.log(Cliente);
