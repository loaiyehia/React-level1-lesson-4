import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Css from "./pages/Css";
import Html from "./pages/Html";
import JavaScript from "./pages/JavaScript";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Welcome to react router</h1>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/css" element={<Css />}></Route>
        <Route path="/html" element={<Html />}></Route>
        <Route path="/javascript" element={<JavaScript />}></Route>
      </Routes>
    </div>
  );
}

export default App;
