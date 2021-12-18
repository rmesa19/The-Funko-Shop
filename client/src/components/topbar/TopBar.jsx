import React, { useRef } from 'react'
import "./topbar.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useContext } from "react";
import { Context } from '../../context/Context';


export default function TopBar() {
    const searchRef = useRef()
    const runSearch = (searchRef) =>{
        
    }

    const {user} = useContext(Context)
    return (
        <div className="top">
            <div className="topLeft"><span className="UserIDHome">Hi, {user? user.username: "Guest"}</span></div>
            <div className="topCenter"><Link className='link' to='/'>Funko Collections</Link></div>
            <div className="topRight">
                <input type= "text" ref={searchRef}></input>
                <i className="SearchIcon fas fa-search" onClick={runSearch}></i>
                <button className="login"><Link className ="link" to="/login">Login</Link></button>
                <button className="logout"><Link className ="link" to="/">Logout</Link></button>
            </div>
        </div>
    )
}
