import React, { Component } from 'react';

import SearchBox from './Components/SearchBox/SearchBox';
import MonsterCard from './Components/MonsterCard/MonsterCard';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      monsters:[],
      searchBox:''
    }
  }
  
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(respone => respone.json())
    .then(users => this.setState({monsters:users}))
  }
  handlachange =(e) =>{
    this.setState({searchBox:e.target.value})
  }
  render() { 
    const {monsters,searchBox } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchBox.toLowerCase()));
    return ( 
      <div>
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handlachange={this.handlachange}
        />
        <MonsterCard monsters={filteredMonsters}/>
      </div>
     );
  }
}
 
export default App;