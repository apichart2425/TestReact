

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Screen from './Component/Screen';
import Login from './Component/Login';
import Profile from './Component/Profile';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      message: "UnLike",
      type: ""
    }
    this.changeMessage = this.changeMessage.bind(this);
    this.insertdata = this.insertdata.bind(this);
  }


  render() {
    return (
      <div className="App">
        <Navbar tact="Pack Apichart" />
        <Profile></Profile>
      </div>
    );
  }

  changeMessage() {
    this.setState({ message: "Like" })
  }
  insertdata() {
    var item = "React";
    var myArray = this.state.data;
    myArray.push(item);
    this.setState({ data: myArray })
  }
  onChange(event) {
    this.setState({ type: event.target.value })
  }
}


class Viewter extends Component {
  render() {
    var mystyle = {
      fontSize: 200,
      color: '#FF0000',
    }
    return (
      <div>
        <h1 style={mystyle}>Pack</h1>
      </div>
    );
  }
}

class ContentX extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          list: "ไขได",
        },
        {
          list: "555",
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h2>todoList</h2>
        <input type="text" />
        <button>ADD</button>
        <br></br>
        {this.state.data.map((item, id) => <TableRow key={id} data={item.list} />)}
      </div>
    )
  }
}

class TableRow extends Component {
  render() {
    return (
      <li>
        {this.props.data}
      </li>
    )
  }
}

export default App;

