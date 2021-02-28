import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import ShowcaseWork from "./components/ShowcaseWork/ShowcaseWork";
import Summary from "./components/Summary/Summary";
function App() {
  //BEM
  return (
    <div className="app">
      <Intro />
      <Header />
      <ShowcaseWork />
      <Summary />
    </div>
  );
}

export default App;
