import React, { Component } from 'react';
import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    // Aqui vamos fazer o bind para poder usar 'this' dentro de changeHandler. Isto eh necessário quando é método é definido da forma antiga.
    // Quando usamos ES6 o bind é feito automáticamente, e seu scope é a própria classe.
    // this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json()
    .then(users => this.setState({monsters: users})))
  }

  // Definição no formato antigo, que requer binding.
  // changeHandler(e) {
  //   this.setState({searchField: e.target.value})
  // }
  
  // Definição usando ES6, que não requer binding.
  changeHandler = e => {
    this.setState({searchField: e.target.value})
  }

  render() {

    const { monsters,searchField } = this.state;
    const filteredMonsters = monsters.filter((m) => m.name.toLowerCase().includes(searchField.toLowerCase()))

    //
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        {/* <input type="search" placeholder="Search monster" onChange={e => this.setState({searchField: e.target.value})} /> */}
        <SearchBox placeholder="Search monster" changeHandler={this.changeHandler} />
        <CardList monsters={filteredMonsters} />
      </div>      
    )
  }
}

export default App;
