import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Panier from "./components/Panier/Panier";
import {UserContext} from './components/UserContext'
function App() {
  const [price, setPrice] = useState(0);
  return (
    <div className="App">
      <UserContext.Provider value={{price,setPrice}}>
      <Routes>
        
        <Route  path="/commerceHuitre" element={<Home />}></Route>
        <Route path="/panier" element={<Panier />}></Route>
        
      </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
