import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import Search from './components/Search';

class App extends Component {
  constructor(){
    super();

    this.state = {
      users: [],
      searchFeild: '',
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({users}))
  }

  handleChange = (e) => {
    this.setState({searchFeild: e.target.value});
  }

  render() {

    const {users, searchFeild} = this.state;

    let filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchFeild.toLowerCase());
    })

    return(
      <div>
        <h1>User List App</h1>
        <Search placeholder="Search" handleChange={this.handleChange} />
        {/* <input type="search" placeholder="Search" onChange={this.handleChange} /> */}
        <CardList users={filteredUsers} />
      </div>
    )
  }

}

export default App;
