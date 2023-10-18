const app = require('./app');
const db = require('./config/connection');

db()
  .then(() => {
    console.log('Banco de dados conectado!');
    app.listen(3001, () => console.log('Servidor rodando na porta 3001'));
  })
  .catch((err) => console.log('Não foi possível conectar ao banco de dados', err));
