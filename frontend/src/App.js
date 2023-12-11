
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Au from "./components/Au";
import Quora from "./components/Quora";
import Signup3 from "./components/Signup3";
import Signin3 from "./components/Signin3";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Quora />} /> 
          <Route path="/about" element={<Au />} />
          <Route path="/signup" element={<Signup3 />} />
          <Route path="/signin" element={<Signin3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;