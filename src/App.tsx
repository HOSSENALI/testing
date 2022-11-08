import "./App.css";
import { Greet } from "./components/Greeting/Greet";
import { Counter } from "./components/counter/Counter";
import { Application } from "./components/application/Application";
import { CounterTwo } from "./components/counter-two/CounterTwo";
import { Skills } from "./components/skills/Skills";
import { SkillsProps } from "./components/skills/Skills.types";
import { MySelector } from "./components/selector/MultipleSelector";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {

  let skills:SkillsProps[]= [
    {
      "id": 1,
      "name": "Hossen",
    },
    {
      "id": 2,
      "name": "Ali",
    },
  ];
  return (
    <div className="App">
      <Greet />
      <Counter />
      <Application />
      <CounterTwo count={0} />
      <Skills skills={skills} />
      <MySelector/>
      <LoginForm />
    </div>
  );
}

export default App;
