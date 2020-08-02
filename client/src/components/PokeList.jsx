import React from 'react';
import axios from 'axios';
import ListEntry from './ListEntry.jsx'

class PokeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // displayAll: this.props.display,
      displayType: this.props.type,
    }

  }



  render() {

    let sortedPoke = this.props.pokemon.filter(poke => poke.type === this.props.type)

    if (this.props.display) {
      return (
        <div>
        {this.props.pokemon.map((poke) => (
          <div key={poke.id}>
            <ListEntry poke={poke} getPokemon={this.props.getPokemon} />
          </div>
        ))}
      </div>
      )
    }

    return (
      <div>
        {sortedPoke.map((poke) => (
          <div key={poke.id}>
            <ListEntry poke={poke} getPokemon={this.props.getPokemon} />
          </div>
        ))}
      </div>
    )
  }
}


export default PokeList;