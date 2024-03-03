import online_shopping from '../../assets/online_shopping.png';
import { MdOutlineShoppingCart } from "react-icons/md";
import './navbar.css'
import { useState } from 'react';
const Navbar = ()=>{
const [manu,setManu] = useState("main");

    return(
    <div className="navbar">
        <div className="navbar-logo">
            <img src={online_shopping}  alt=""/>
            <p>BAYSHOP</p>
        </div>
        <ul className='nav-manu'>
            <li onClick={()=>{setManu("main")}}>Main{manu==="main"?<hr/>:<></>}</li>
            <li onClick={()=>{setManu("art_toy")}}>art toy{manu==="art_toy"?<hr/>:<></>}</li>
            <li onClick={()=>{setManu("accessories")}}>accessories{manu==="accessories"?<hr/>:<></>}</li>
            <li onClick={()=>{setManu("other")}}>other{manu==="other"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <button>login</button>
            <MdOutlineShoppingCart size={30}/>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>)
}

export default Navbar