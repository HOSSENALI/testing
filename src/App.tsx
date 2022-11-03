import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greeting/Greet';
import { Counter } from './components/counter/Counter';
import { Application } from './components/application/Application';
import { CounterTwo } from './components/counter-two/CounterTwo';

function App() {
  return (
    <div className="App">
     <Greet/>
     <Counter/>
     <Application/>
     <CounterTwo/>
    </div>
  );
}

export default App;
