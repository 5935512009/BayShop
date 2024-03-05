import React from 'react'
import './popular.css'
import data_product from '../../assets/data'
import {Item} from '../item/Item'
export const Popular = () => {
  return (
    <>
        <div className='popular'>
            <h1>POPULAR SKULLPANDA</h1>
            <hr/>
            <div className='popular-item'>
                {data_product.map((item,i)=>{
                    return <Item key={i} image={item.image} name={item.name}/>
                })}
            </div>
        </div>
    </>
  )
}
