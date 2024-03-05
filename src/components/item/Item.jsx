import React from 'react'
import './item.css'
export const Item = (props) => {
  return (
    <>
        <div className='item'>
            <img src={props.image} alt="item not work"/>
            <p>{props.name}</p>
        </div>
    </>
  )
}
