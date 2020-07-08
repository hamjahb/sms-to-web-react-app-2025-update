import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

// import fontawesome 
import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

// import pages and componenets
import AllMessageContainer from './pages/AllMessageContainer'

// bootstrap imports
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'

// standardized URL for API
const APIURL = 'https://obscure-lowlands-72494.herokuapp.com/'


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
    console.log('list reset');
  }


  // used for testing test button ONLY
  onTestButtonClick(value) {
    console.log(value);
    this.smsListReset()
    axios.get('http://localhost:5000/' + value +'api')
    .then(response => {
      // console.log(response.data);
      this.setState({
        smsList: response.data
      }) 
    })
    .catch(error => {
      console.log(error);
    });
  }


  // production button click
  onButtonClick(value) {
    // console.log( value + ' Button is clicked');
    // console.log(APIURL + value + 'api');
    this.smsListReset()
    axios.get(APIURL + value + 'api')
    .then(response => {
      // console.log(response.data);
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

  
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="http://almudhan.com.sa/" target= "blank">
            <img
              alt="Almudhan Group Logo"
              src="http://almudhan.com.sa/images/logo.png?v=1"
              width="40"
              height="40"
              className="d-inline-block"
            />{' '} Almudhan Group
          </Navbar.Brand>
        </Navbar>
  
        <body className="App-body">
          <Button value = 'test' variant="outline-dark" size="lg" block onClick = {(e) => this.onTestButtonClick(e.target.value)} >Check TEST New Code at ***88</Button>
          <Button value = 'ali' variant="outline-dark" size="lg" block onClick = {(e) => this.onButtonClick(e.target.value)} >Check Ali New Code at **06</Button>
          <Button value = 'hanady' variant="outline-dark" size="lg" block onClick = {(e) => this.onButtonClick(e.target.value)} >Check Hanady New Code at ***40 </Button>
          <Button disabled value = 'hanan' variant="outline-dark" size="lg" block onClick = {(e) => this.onButtonClick(e.target.value)} >Check Hanan New Code at **** </Button>
          <Button value = 'hisham' variant="outline-dark" size="lg" block onClick = {(e) => this.onButtonClick(e.target.value)} >Check Hisham New Code at ***88</Button>
          <Button value = 'mofareh' variant="outline-dark" size="lg" block onClick = {(e) => this.onButtonClick(e.target.value)} >Check Mofareh New Code at ***40</Button>
          <Button disabled value = 'tahani'  variant="outline-dark" size="lg" block onClick = {(e) => this.onButtonClick(e.target.value)} >Check Tahani New Code at ***36</Button>
          <AllMessageContainer smsList = {this.state.smsList}/>
        </body>

        <Navbar bg="dark" className="justify-content-center">
          <footer className="App-footer">
            <p>created by Hisham Aljahbli for Almudhan Group</p>
            <div id='footer-nav'>
              <a href="https://www.linkedin.com/in/haljahbli-softwareeng" target= "blank"> <FaLinkedin/></a>
              <a href="https://github.com/hamjahb" target= "blank"><FaGithub/></a>
              <a href="mailto:h.aljahbli@gmail.com"><FaEnvelope/></a>
            </div>
          </footer>
        </Navbar>
      </div>
    );
    
  }
  
}

export default App;