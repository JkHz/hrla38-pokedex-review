const db = require('../database/index.js');

module.exports = {

  get: (req, res) => {
    let queryStr = `SELECT * FROM pokemon`

    db.query(queryStr, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    })
  },

  post: (req, res) => {
    let {name, type, img} = req.body
    let queryStr = `INSERT INTO pokemon (name, type, img) VALUES ("${name}", "${type}", "${img}")`

    db.query(queryStr, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    })
  },

  put: (req, res) => {

    let {id} = req.params;
    let {name} = req.body;
    let queryStr = `UPDATE pokemon SET name = "${name}" WHERE id = ${id} `

    db.query(queryStr, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    })

  },

  delete: (req, res) => {
    let {id} = req.params;

    let queryStr = `DELETE FROM pokemon WHERE id = ${id}`
    db.query(queryStr, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    })
  }

}