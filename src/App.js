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
  
  smsListReset() {
    this.setState({
      smsList: []
    })
  }

  onButtonClick() {
    console.log('hisham button is clicked');
    this.smsListReset()
    console.log('list reset');
    
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


  onHanadyButtonClick() {
    console.log('hanady button is clicked');
    this.smsListReset()
    console.log('list reset');
    axios.get('https://obscure-lowlands-72494.herokuapp.com/hanadyapi')
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


  onMofarehButtonClick() {
    console.log('mofareh button is clicked');
    this.smsListReset()
    console.log('list reset');
    axios.get('https://obscure-lowlands-72494.herokuapp.com/mofarehapi')
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
        </body>
          <button onClick = {(e) => this.onButtonClick(e)} >Check Hisham New Code at ***88</button>
          <button onClick = {(e) => this.onHanadyButtonClick(e)} >Check Hanady New Code at ***40 </button>
          <button onClick = {(e) => this.onMofarehButtonClick(e)} >Check Mofareh New Code at ***40</button>
  
        <footer className="App-footer">
          <p>created by Hisham Aljahbli</p>
        </footer>
      </div>
    );
    
  }
  
}

export default App;