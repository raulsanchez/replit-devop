const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/', function (req, res) {
  const { operation, n1, n2 } = req.body;
  let result;

  switch (operation) {
    case 'suma':
      result = n1 + n2;
      break;
    case 'resta':
      result = n1 - n2;
      break;
    case 'division':
      if (n2 === 0) {
        return res.status(400).send('No se puede dividir por cero.');
      }
      result = n1 / n2;
      break;
    case 'multiplicacion':
      result = n1 * n2;
      break;
    default:
      return res.status(400).send('Operación no soportada.');
  }
  res.send(`El resultado de la ${operation} es: ${result}`);
})

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});