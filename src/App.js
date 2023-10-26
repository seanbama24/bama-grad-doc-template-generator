import './App.css';
import * as React from 'react';
import FormStepper from './components/FormStepper';
import logo from './Logos/OfficLogo-Graduate.png';
import picture from './Logos/WLAM.png';

function App() {
  return (
    <div className="App">
      <img src={logo} width={400} height={75} alt="logo" style={{margin: '2em 5em 2em 5em'}}/>
      <img src={picture} width={500} height={75} alt="logo" style={{margin: '2em 5em 2em 5em'}}/>
      <p style={{margin: '2em 5em 2em 5em'}}>
        The University of <span style={{color: '#9E1B32'}}>Alabama</span> Graduate School Thesis Document Generator
      </p>
      <FormStepper/>
    </div>
  );
}

export default App;
