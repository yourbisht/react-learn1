import React, { Component } from 'react';
import {Cards} from './components/Card/Cards';
import { SearchBox } from './components/SearchBox/SearchBox';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      monsters:[],
      searchField:''
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
  handleChange = (e) =>{
    this.setState({searchField:e.target.value});
  }
  render(){
    const { monsters, searchField } = this.state;
    const filterSeachBox = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return (
      <div className="container-fluid">
        <h1 className="text-center mx-2">Monster Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange}/>
        <div className="row">          
            <Cards monsters={filterSeachBox}/>
        </div>
      </div>
    );
  }
}

export default App;
