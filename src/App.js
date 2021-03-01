import React from "react";

import "./App.css";
import Intro from "./components/Intro/Intro";
import ShowcaseWork from "./components/ShowcaseWork/ShowcaseWork";
function App() {
  //BEM
  return (
    <div className="app">
      <Intro />
      <ShowcaseWork />
    </div>
  );
}

export default App;
