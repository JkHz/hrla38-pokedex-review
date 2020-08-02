var mysql = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'MSjdhjacknife55',
  database : 'pokedex'
});

db.connect();

module.exports = db;