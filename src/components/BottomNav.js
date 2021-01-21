import React, {useContext} from 'react'
import { Link, useHistory} from 'react-router-dom'
import { AiOutlinePlusCircle, AiFillCopy, AiOutlineBorder } from 'react-icons/ai'
import { BsListTask } from 'react-icons/bs'
import { RiDashboardFill } from 'react-icons/ri'
import { GrProjects } from 'react-icons/gr'
import { AppTransitionContext } from '../service/AppTransitionContext'
import {useDB} from '../service/DatabaseContext'
import {useAuth} from '../service/AuthContext'
import {useProject} from '../service/ProjectContext'

export default function BottomNav() {
    const history = useHistory()
    const { setPreset } = useContext(AppTransitionContext);
    const { projects } = useDB()
    const {currentUser} = useAuth()
    const {assignTaskboard , userTasks} = useProject()
    
    async function handleToCreateTask(){
        try {
            if(projects.length === 0){
                window.alert("You need to create a Project first, before you can create Tasks!");
                await setPreset("cubeToBottom")
                history.push('/create-project')
            }else{
            await setPreset("cubeToTop")
            history.push('/create-task')
            }
        } catch (error) {

        }
    }

    async function handleToTaskboard(){
        try {
            // needs to be implemented as own Provider
            // await assignProject(project);
            console.log(userTasks)
            await assignTaskboard(currentUser.uid)
            await setPreset("cubeToLeft")
            history.push('/task-board')
            // TODO 
            // 1. set Dashboard & Taskboard seperate
            // 2. implement some load project by ID, and open only if user is shared to this particular project
            // await setPreset("cubeToTop")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="navbar-bottom">
                <Link to="/"><AiOutlineBorder size="2em" /></Link>
                <Link onClick={handleToCreateTask}><AiOutlinePlusCircle size="2em"/></Link>
                <Link onClick={handleToTaskboard} ><BsListTask size="2em"/></Link>
                </div>
    )
}
