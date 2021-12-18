import React from 'react'
import "./header.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm"><Link to="/collection">View Your Collection</Link></span>
                <span className="headerTitleLg"></span>
            </div>
        </div>
    )
}
