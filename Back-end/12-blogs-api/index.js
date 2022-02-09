const express = require('express');
const router = require('./routes');
const erroMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(router);

app.use(erroMiddleware);
