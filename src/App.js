import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";

import IntroTemp from './IntroTemp';

function App() {
  return (
<BrowserRouter>
<div className="">


      <IntroTemp></IntroTemp>

    </div>
</BrowserRouter>
  );
}

export default App;
