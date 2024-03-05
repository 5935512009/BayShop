
import './App.css';
import Navbar from './components/navbar/Navbar';
import React from "react";
import { Main } from './pages/Main';
import { ArtToy } from './pages/ArtToy';
import { Accessories} from './pages/Accessories'
import {Other} from './pages/Other'
import {Cart} from './pages/Cart'
import {LoginSignup} from './pages/LoginSignup'
import {Hero} from './components/hero/Hero';

import {
  BrowserRouter, 
  Route,
  Routes
} from "react-router-dom";
import { Popular } from './components/popular/Popular';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Hero/>
        <Routes>
          {/* แบบที่ 1 */}
          <Route path="/" element={<Main/>}/>
          <Route path="/Art_toy" element={<ArtToy/>}/>
          <Route path="/Accessories" element={<Accessories/>}/>
          <Route path="/Other" element={<Other/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/LoginSignup' element={<LoginSignup/>}/>
          {/* แบบที่ 2 อันนี้ยังไม่ได้ลอง  ตรงส่วนนี้เพิ่ม category มาลอง test ดู */
          /* <Route path="/item1" element={<Other category="item11"/>}/>
          <Route path="/item2" element={<Other category="item22"/>}/> */}
          

        </Routes>
        <Popular/>
      </BrowserRouter>
      test branch Bay_3BB

    </div>
  );
}

export default App;
