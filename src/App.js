import './App.css';
import * as React from 'react';
import FormStepper from './components/FormStepper';
import logo from './Logos/OfficLogo-Graduate.png';

function App() {
  return (
    <div className="App">
      <img src={logo} width={500} height={100} alt="logo" style={{margin: '2em 5em 2em 5em'}}/>
      <p>
        The University of Alabama Graduate School Thesis Document Generator
      </p>
      <FormStepper/>
    </div>
  );
}

export default App;
