const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const db = require('../database/index.js');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/dist')));

const port = 3002;

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});