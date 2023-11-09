import './App.css';
import * as React from 'react';
import FormStepper from './components/FormStepper';
import logo from './Logos/OfficLogo-Graduate.png';
import picture from './Logos/WLAM.png';

function App() {
  return (
    <div className="App" style={{margin: '0 5em 0 5em'}}>
      <img src={logo} width={500} height={75} alt="logo" style={{margin: '1em 5em 0 0'}}/>
      <FormStepper/>
    </div>
  );
}

export default App;
