const Soma = (valor1, valor2) => {
  const parseValor1 = parseInt(valor1);
  const parseValor2 = parseInt(valor2);
  const soma = parseValor1 + parseValor2;
  const somaJson = JSON.stringify(soma);
  return somaJson;
};

const Multiplicacao = (valor1, valor2) => {
  const parseValor1 = parseInt(valor1);
  const parseValor2 = parseInt(valor2);
  const soma = parseValor1 * parseValor2;
  const somaJson = JSON.stringify(soma);
  return somaJson;
};

const Subtracao = (valor1, valor2) => {
  const parseValor1 = parseInt(valor1);
  const parseValor2 = parseInt(valor2);
  const soma = parseValor1 - parseValor2;
  const somaJson = JSON.stringify(soma);
  return somaJson;
};

const Divisao = (valor1, valor2) => {
  const parseValor1 = parseInt(valor1);
  const parseValor2 = parseInt(valor2);
  const soma = parseValor1 / parseValor2;
  const somaJson = JSON.stringify(soma);
  return somaJson;
};

module.exports = {
  Soma,
  Multiplicacao,
  Subtracao,
  Divisao,
};
