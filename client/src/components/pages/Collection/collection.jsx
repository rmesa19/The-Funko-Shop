import React from 'react'
import Inventory from '../../inventory/inventory'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../header/header'
import { useContext } from "react";
import { Context } from '../../../context/Context'



export default function Collection(user) {
    const [items, setItems] = useState([])
    //const {user} = useContext(Context)
    const search = user.username;
    useEffect(()=>{
        const fetchInventory = async ()=>{
            const res = await fetch("/inventory?user="+{search})
            const info = await res.json();
            setItems(info)
        }
        fetchInventory();
    },[search])

    return (
        <>
            <div className="collection">
                <Inventory items={items} home={false}/>
                
            </div>
        </>
    )
}
