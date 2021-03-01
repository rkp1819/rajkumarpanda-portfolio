import React from "react";

import "./App.css";
import Intro from "./components/Intro/Intro";
import ShowcaseWork from "./components/ShowcaseWork/ShowcaseWork";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
function App() {
  //BEM
  return (
    <Router>
      <div className="app">
        <Intro />
        <ShowcaseWork />
      </div>
    </Router>
  );
}

export default App;
