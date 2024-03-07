import React from "react";
import './NewCollections.css'
import data_new_collections from '../../assets/data_new_collections'
import { Item } from "../item/Item";
export const NewCollections = ()=>{
    return(<>
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr/>
            <div className="collections">
                {data_new_collections.map((item,i)=>{
                    return <Item key={i} image={item.image} name={item.name}/>
                })}
            </div>
        </div>
    </>)
}
