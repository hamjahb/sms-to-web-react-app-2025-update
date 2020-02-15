import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <head>
        <title>Hisham Code</title>
      </head>

      <header className="App-header">
        <p>this page shows any sms messages recived by hisham</p>
      </header>

      <body className="App-body">
        <h1>here will lie all text containers</h1>
        <smsContainer/>
        <button>Check for New Code</button>
      </body>

      <footer className="App-footer">
        <p>created by Hisham Aljahbli</p>
      </footer>
    </div>
  );
}

export default App;
