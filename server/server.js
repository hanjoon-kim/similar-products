const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

const app = express();
const port = 3001;

const con = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'similarProducts',
});

app.use(bodyParser.json());
app.use(express.static('client'));

app.get('/', function (req, res) {
  console.log(req.body, 'inside server');
  var data = {};
  con.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');
    var query = 'SELECT * FROM products'

    con.query(query, function (err, result) {
      if (err) throw error;
      console.log('Query successful');
      data = result;
    })
  })
  res.send(data);
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});