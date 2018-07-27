const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database.index.js');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '../public'));

const port = 3001;

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});