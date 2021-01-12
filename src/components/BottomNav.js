import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BsListTask } from 'react-icons/bs'
import { RiDashboardFill } from 'react-icons/ri'

export default function BottomNav() {
    return (
        <div className="navbar-bottom">
                <Link to="/"><RiDashboardFill size="2em" /></Link>
                <Link to="/"><AiOutlinePlusCircle size="2em"/></Link>
                <Link to="/task-board" ><BsListTask size="2em"/></Link>
                </div>
    )
}
