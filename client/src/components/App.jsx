import React from 'react';
import axios from 'axios';
import PokeList from './PokeList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      type: '',
      displayAll: true,
      insertClicked: false,
      insertName: '',
      insertType: '',
      insertImg: ''

    }
    this.getPokemon = this.getPokemon.bind(this);
    this.typeHandler = this.typeHandler.bind(this);
    this.showAll = this.showAll.bind(this);
    this.toggleInsert = this.toggleInsert.bind(this);
    this.insertMode = this.insertMode.bind(this);
    this.insertPoke = this.insertPoke.bind(this);
    this.handleInsert = this.handleInsert.bind(this);
    this.selectByType = this.selectByType.bind(this);

  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    axios.get('/api')
    .then((results) => {
      this.setState({
        pokemon: results.data
      }, () => console.log(this.state.pokemon))
    })
    .catch((err) => {
      console.error(err)
    })
  }

  typeHandler(e) {
    this.setState({
      type: e.target.value,
      displayAll: false
    }, () => console.log(this.state.type))
  }

  showAll() {
    this.setState({
      displayAll: true
    })
  }

  toggleInsert() {
    this.setState({
      insertClicked: !this.state.insertClicked
    })
  }

  insertMode() {
    if (this.state.insertClicked) {
      return (
        <div>
          <input name="insertName" placeholder="Pokemon Name" onChange={this.handleInsert}></input>
          <input name="insertType" placeholder="Pokemon Type" onChange={this.handleInsert}></input>
          <input name="insertImg" placeholder="Pokemon Image" onChange={this.handleInsert}></input>
          <button onClick={this.insertPoke}>Insert Pokemon</button>
          <button onClick={this.toggleInsert}>Cancel</button>
        </div>
      )
    }
  }

  handleInsert(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  insertPoke() {
    axios.post('/api', {
      "name": this.state.insertName,
      "type": this.state.insertType,
      "img": this.state.insertImg
    })
    .then(() => {
      this.toggleInsert();
    })
    .then(() => {
      this.getPokemon();
    })
    .catch((err) => {
      console.error(err)
    })
  }

  selectByType() {
    this.setState({
      displayAll: true
    })
  }

  render() {

    return (
      <div>
        <div>
          <h1>Pokemon!</h1>
          <button onClick={this.showAll}>Show All</button>
          <select id="type" onChange={this.typeHandler}>
            <option onChange={this.selectByType}>Sort by Type</option>
            <option>Grass</option>
            <option>Fire</option>
            <option>Water</option>
            <option>Normal</option>
            <option>Poison</option>
            <option>Electric</option>
            <option>Ground</option>
            <option>Fighting</option>
            <option>Psychic</option>
            <option>Rock</option>
            <option>Ghost</option>
            <option>Dragon</option>
          </select>
          <button onClick={this.toggleInsert}>INSERT</button>
          {this.insertMode()}
        </div>
        <PokeList pokemon={this.state.pokemon} type={this.state.type} display={this.state.displayAll}getPokemon={this.getPokemon}/>
      </div>
    )
  }

}

export default App;