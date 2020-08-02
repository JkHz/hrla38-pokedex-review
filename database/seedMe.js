const pokemon = require('../pokemon.json');
const db = require('./index.js');


const seedMe = () => {
  pokemon.map((poke, key) => {
    db.query(`INSERT INTO pokemon (name, type, img) VALUES ("${poke.name}", "${poke.type}", "${poke.img}")`)
  })
}

seedMe();