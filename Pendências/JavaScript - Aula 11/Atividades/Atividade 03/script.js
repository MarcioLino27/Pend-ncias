let numeros = [1, 2, 3, 4, 5, 6];

let soma = numeros.reduce(function(acumulador, valorAtual) {
  return acumulador + valorAtual;
}, 0);

console.log(soma);
