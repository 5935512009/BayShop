import online_shopping from '../../assets/online_shopping.png';
import { MdOutlineShoppingCart } from "react-icons/md";
import './navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = ()=>{
const [manu,setManu] = useState("main");

    return(
    <div className="navbar">
        <div className="navbar-logo">
        <Link style={{textDecoration:'none'}} to="./"> 
            <img src={online_shopping}  alt=""/></Link>
            <Link style={{textDecoration:'none'}} to="./"> <p>BAYSHOP</p> </Link>
           
        </div>
        <ul className='nav-manu'>
            <li onClick={()=>{setManu("main")}}><Link style={{textDecoration:'none' , color:'black'}} to="./">Main</Link>{manu==="main"?<hr/>:<></>}</li>
            <li onClick={()=>{setManu("art_toy")}}><Link style={{textDecoration:'none' , color:'black'}} to="./art_toy">art toy</Link>{manu==="art_toy"?<hr/>:<></>}</li>
            <li onClick={()=>{setManu("accessories")}}><Link style={{textDecoration:'none' , color:'black'}} to="./accessories">accessories</Link>{manu==="accessories"?<hr/>:<></>}</li>
            <li onClick={()=>{setManu("other")}}><Link style={{textDecoration:'none' , color:'black'}} to="./other">other</Link>{manu==="other"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link style={{textDecoration:'none'}} to='./LoginSignup'><button>login</button></Link>
            <Link style={{textDecoration:'none' , color:'black'}} to='./cart'><MdOutlineShoppingCart size={30}/></Link>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>)
}

export default Navbar