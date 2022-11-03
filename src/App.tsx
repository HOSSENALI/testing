import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greeting/Greet';
import { Counter } from './components/counter/Counter';
import { Application } from './components/application/Application';

function App() {
  return (
    <div className="App">
     <Greet/>
     <Counter/>
     <Application/>
    </div>
  );
}

export default App;
