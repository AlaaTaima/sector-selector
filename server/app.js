
const { join } = require('path');
const express = require('express');

const router = require('./router');

const app = express();

app.disabled('x-powered-by');

app.use(express.json());

app.set('port', process.env.PORT || 9000);

app.use(express.static(join(__dirname, '..', 'client', 'build')));

app.use('/api/v1', router);

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = app;
