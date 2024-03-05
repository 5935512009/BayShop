import React from "react";
import skullpanda_Blossom_limited from '../../assets/skullpanda_Blossom_limited.png'
import './offers.css'
export const Offers = ()=>{
    return(<>
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLER PRODUCT</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={skullpanda_Blossom_limited} alt="Offers-right-not-work"/>
            </div>
        </div>
        
    </>)
}