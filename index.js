const express = require('express');
const calculadora = require('./utils/calculadora');
const app = express();

const PORT = 3003 || process.env.PORT;

app.use(express.json());

app.get('/soma', (req, res) => {
  const { valor1, valor2 } = req.body;
  const result = calculadora.Soma(valor1, valor2);
  res.send(result);
});

app.post('/multiplicacao', (req, res) => {
  const { valor1, valor2 } = req.body;
  const result = calculadora.Multiplicacao(valor1, valor2);
  res.send(result);
});

app.get('/divisao', (req, res) => {
  const { valor1, valor2 } = req.body;
  const result = calculadora.Divisao(valor1, valor2);
  res.send(result);
});

app.get('/subtracao', (req, res) => {
  const { valor1, valor2 } = req.body;
  const result = calculadora.Subtracao(valor1, valor2);
  res.send(result);
});

app.listen(PORT, (e) => {
  if (!e) {
    console.log(`Está rodando na porta ${PORT}`);
  } else {
    console.log('ERRORrrr  : ', e);
  }
});
