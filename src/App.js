import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'



class App extends Component { 

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() { // gets called when this component renders for the first time
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  handleChnage = (e) => {
    this.setState({ searchField: e.target.value });
  }

render() {
  const { monsters, searchField } = this.state;
  const filteredMonters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1> Cuties Display Box </h1>
      <SearchBox 
        placeholder="search cuties" 
        handleChnage={ this.handleChnage}
      />
      <CardList monsters={filteredMonters}/>
    </div>
  );
}
 
}

export default App;
