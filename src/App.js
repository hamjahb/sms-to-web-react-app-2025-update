import React, { Component } from 'react';
import './App.css';

import axios from 'axios';



// import pages and componenets
import AllMessageContainer from './pages/AllMessageContainer'



class App extends Component {
  constructor(props){
    super (props)
    
    this.state = {
      smsList: []
    }
  }
  
  onButtonClick() {
    console.log('button is clicked');
    axios.get('https://obscure-lowlands-72494.herokuapp.com/all')
    .then(response => {
      console.log(response.data);
      this.setState({
        smsList: response.data
      }) 
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  render() {
    
    return (
      <div className="App">
  
        <head>
          <title>Hisham Code retriver</title>
        </head>
  
        <header className="App-header">
          <p>this page shows any sms messages recived by hisham</p>
        </header>
  
        <body className="App-body">
          <AllMessageContainer id='messageContainer'smsList = {this.state.smsList}/>
          <button onClick = {(e) => this.onButtonClick(e)} >Check for New Code</button>
        </body>
  
        <footer className="App-footer">
          <p>created by Hisham Aljahbli</p>
        </footer>
      </div>
    );
    
  }
  
}

export default App;