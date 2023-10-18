const express = require('express');

const { userRoutes } = require('./routes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/users', userRoutes);

module.exports = app;