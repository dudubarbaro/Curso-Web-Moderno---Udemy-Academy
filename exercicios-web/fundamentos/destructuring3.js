function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

const Obj = { max: 80, min: 60 };
console.log(rand(Obj));
console.log(rand({ min: 800 }));
console.log(rand({}));
console.log(rand());
