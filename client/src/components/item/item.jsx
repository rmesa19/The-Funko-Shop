import React from 'react'
import "./item.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function Item({item, home}) {
    
    
    return (
        <div className="item">
            <span className="itemTitle">{item.name}</span>
            <img className="itemImg" src={`${process.env.PUBLIC_URL}/${item.image}`} alt={item.description + " from " + item.category}></img>

            <div className="itemInfo">
                {home ?
                <Link to="/collection"><button className='Add'>Add to Collection</button></Link>:
                <button className='Remove'>Remove From Collection</button>}
            </div>
            
        </div>
    )
}
