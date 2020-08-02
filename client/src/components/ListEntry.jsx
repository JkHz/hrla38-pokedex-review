import React from 'react';
import axios from 'axios';

class ListEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newName: '',
      updateSelected: false
    }

    this.updateName = this.updateName.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.editMode = this.editMode.bind(this);
    this.deletePoke = this.deletePoke.bind(this);

  }

  handleChange(e) {
    this.setState({
      newName: e.target.value
    })
  }

  updateName() {
    axios.put(`/api/${this.props.poke.id}`, {
      "name": this.state.newName
    })
    .then(() => {
      console.log(this.state)
      this.toggleUpdate();
    })
    .then(() => {
      this.props.getPokemon();
    })
    .catch((err) => {
      console.error(err)
    })
  }

  deletePoke() {
    axios.delete(`/api/${this.props.poke.id}`)
    .then(() => {
      console.log(`${this.props.poke.name} deleted`)
      this.props.getPokemon();
    })
    .catch((err) => {
      console.error(err)
    })
  }

  toggleUpdate() {
    this.setState({
      updateSelected: !this.state.updateSelected
    })
  }

  editMode() {
    if (this.state.updateSelected) {
      return (
        <div>
          <input name="newName" onChange={this.handleChange}></input>
          <button onClick={this.updateName}>Change Name</button>
          <button onClick={this.toggleUpdate}>Cancel</button>
          <button onClick={this.deletePoke}>Delete Pokemon</button>
        </div>
      )
    }
  }



  render() {
    return (
      <div>
        {this.editMode()}
        <h3 onClick={this.toggleUpdate}>{this.props.poke.name}</h3>
        <img src={this.props.poke.img} />
      </div>
    )
  }
}





export default ListEntry;