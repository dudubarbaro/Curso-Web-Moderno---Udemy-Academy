// novo recurso do ES2015

const Automovel = {
  marca: "Fiat",
  ano: 2005,
  modelo: "Uno",
  combustivel: {
    gasolina: "aditivada",
    gas: "natural",
  },
};

const { marca, modelo, ano } = Automovel;
console.log(marca, modelo, ano);

const { modelo: novo_modelo } = Automovel;
console.log(novo_modelo);

const { multimidia, jogo_rodas = true } = Automovel;
console.log(multimidia, jogo_rodas);

const {
  combustivel: { gasolina, gas, diesel },
} = Automovel;
console.log(gasolina, gas, diesel);

const {
  multimidia: { tela, som },
} = Automovel;
console.log(tela, som);
