import React from 'react'
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className = "sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">Your Collection</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem"></li>
                    <li className="sidebarListItem"></li>
                    <li className="sidebarListItem"></li>
                    <li className="sidebarListItem"></li>
                </ul>
            </div>
        </div>
    )
}
