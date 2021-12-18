import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../header/header'
import Inventory from '../../inventory/inventory'
import Sidebar from '../../sidebar/Sidebar'
import "./home.css"

export default function Home(user) {

    const [items, setItems] = useState([])
    const {search} = useLocation(); 

    useEffect(()=>{
        const fetchInventory = async ()=>{
            try{
                const res = await (await fetch("/inventory" + search)).json()
                console.log(res)
                setItems(res)
            }catch(err){
                console.log(err)
            }
        }
        try{
            fetchInventory();
        }catch(err){
            console.log(err)
        }
    },[search])

    return (
        <>
            <Header/>
            <div className="home">
                <Inventory items={items} home={true} user={user}/>
                
            </div>
        </>
    )
}
