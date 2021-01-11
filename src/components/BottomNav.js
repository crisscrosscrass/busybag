import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePlusCircle } from 'react-icons/ai'

export default function BottomNav() {
    return (
        <div className="navbar-bottom">
                <Link to="/">Dashboard</Link>
                <Link to="/"><AiOutlinePlusCircle size="2em"/></Link>
                <Link to="/task-board" >Taskboard</Link>
                </div>
    )
}
