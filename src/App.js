import React from "react";

import './App.css';
import Header from "./components/Header"
import HeaderBody from "./components/HeaderBody";
import MainBody from "./components/MainBody"

function App() {
  return (
    <div className="App">
        <Header />
        <HeaderBody />
        <MainBody />
    </div>
  );
}

export default App;
