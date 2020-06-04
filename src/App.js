import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField: '',
    };
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
    
  }
  render()
  {
    const { monsters, searchField } = this.state;
    const FilterKaro = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      
    <div className="App">
      <h1> Monster by Me</h1>
     <SearchBox 
      placeholder='search monsters'
      handleChange={e => this.setState({ searchField: e.target.value})}    
     />
    <CardList monsters={FilterKaro}>
       </CardList>
    </div>
    );
  }
}

export default App;
