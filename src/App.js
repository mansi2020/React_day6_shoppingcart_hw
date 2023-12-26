import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";

function App() {
  // state----------------------
  const [cartVal, setCartVal] = useState(4);

  // total product qty---------------
  const setTotalProduct = (value) => {
    setCartVal(value);
  };

  return (
    <div className="App">
      <Header totalCart={cartVal}></Header>
      <Main totalProduct={setTotalProduct}></Main>
    </div>
  );
}

export default App;
