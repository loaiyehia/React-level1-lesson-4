import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Html from "./pages/Html";
import JavaScript from "./pages/JavaScript";

// level 2 //////
import { useContext } from "react";
import ThemeContexttt from "./Store/ThemeContext";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const ctx = useContext(ThemeContexttt);
  return (
    <div className={`${ctx.theme}`}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/html" element={<Html />}></Route>
        <Route path="/javascript" element={<JavaScript />}></Route>
      </Routes>
    </div>
  );
}

export default App;
