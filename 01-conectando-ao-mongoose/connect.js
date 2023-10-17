const mongoose = require('mongoose');

// Conectando ao banco de dados
main()
  .catch(err => console.log('Tá fraquejado ' + err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/trybnb');
  console.log('Conectado ao banco de dados');
}

