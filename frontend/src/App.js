import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componets/Header/Header';
import Shop from './Pages/Shop/Shop';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Shop />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
