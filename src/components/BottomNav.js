import React from 'react'
import { Link } from 'react-router-dom'

export default function BottomNav() {
    return (
        <div className="navbar-bottom">
                <Link to="/">Dashboard</Link> &nbsp;
                <Link to="/task-board" >Taskboard</Link>
                </div>
    )
}
