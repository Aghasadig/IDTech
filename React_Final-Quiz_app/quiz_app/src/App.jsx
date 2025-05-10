import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import { Quizpage } from "./components/QuizPage";

const App = () => {
  return (
   <div className="container">
       <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/:category" element={<Quizpage />} />

    </Routes> 
  </div>
  );
};

export default App;