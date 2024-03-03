
import './App.css';
import Navbar from './components/navbar/Navbar';
import React from "react";
import {
  BrowserRouter, 
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
