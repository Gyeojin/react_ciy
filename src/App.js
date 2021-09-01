import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; //npm install react-router-dom
import axios from "axios";
import Header from "./components/Header";
import Home from "./components/Home";
import RecipeDetail from "./components/RecipeDetail";

import "./css/Reset.css";
import "./css/App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className='App'>
        <Route path='/' exact component={Home}></Route>
        <Route path='/RecipeDetail' component={RecipeDetail}></Route>
      </div>
    </Router>
  );
}

export default App;
