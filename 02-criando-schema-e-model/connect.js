const mongoose = require('mongoose');

// Conectando ao banco de dados
main()
  .catch(err => console.log('Tá fraquejado ' + err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log('Conectado ao banco de dados');
}
//---------------------------------------------//

// Criando um schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  age: Number,
});
//---------------------------------------------//

// Criando um model e vinculando ao schema

const User = mongoose.model('User', userSchema);
//---------------------------------------------//