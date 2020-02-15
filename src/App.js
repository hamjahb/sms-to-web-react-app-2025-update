import React, { Component } from 'react';
import './App.css';

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
          <h1>here will lie all text containers</h1>
          <AllMessageContainer/>
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