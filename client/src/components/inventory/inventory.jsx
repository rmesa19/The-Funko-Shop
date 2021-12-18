import React from 'react'
import Item from '../item/item'
import "./inventory.css"

export default function Inventory({items, home}) {

    
    return (
        <div className='inventory'>
            <div className="inventoryTitle">MarketPlace</div>
            <div className="inventoryContainer">
                
                {items.map(i=>(<Item item={i} home={home}/>))}
            
        
            </div>
        
            
        </div>
    )
}
