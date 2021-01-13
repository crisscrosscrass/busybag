import React, {useContext} from 'react'
import { Link, useHistory} from 'react-router-dom'
import { AiOutlinePlusCircle, AiFillCopy, AiOutlineBorder } from 'react-icons/ai'
import { BsListTask } from 'react-icons/bs'
import { RiDashboardFill } from 'react-icons/ri'
import { GrProjects } from 'react-icons/gr'
import { AppTransitionContext } from '../service/AppTransitionContext'
import {useDB} from '../service/DatabaseContext'

export default function BottomNav() {
    const history = useHistory()
    const { setPreset } = useContext(AppTransitionContext);
    const { projects } = useDB()
    
    async function handleToCreateTask(){
        try {
            if(projects.length === 0){
                window.alert("You need to create a Project first, before you can create Tasks!");
                await setPreset("cubeToBottom")
                history.push('/create-project')
            }else{
            await setPreset("cubeToRight")
            history.push('/create-task')
            }
        } catch (error) {
        }

    }
    return (
        <div className="navbar-bottom">
                <Link to="/"><AiOutlineBorder size="2em" /></Link>
                <Link onClick={handleToCreateTask}><AiOutlinePlusCircle size="2em"/></Link>
                <Link to="/task-board" ><BsListTask size="2em"/></Link>
                </div>
    )
}
