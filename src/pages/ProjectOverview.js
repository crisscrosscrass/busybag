import React, { useRef, useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../service/AuthContext'
import { useDB } from '../service/DatabaseContext'
import { useProject } from '../service/ProjectContext'
import { AiOutlineArrowLeft, AiFillEdit } from 'react-icons/ai'
import { BiShareAlt } from 'react-icons/bi'
import { AppTransitionContext } from '../service/AppTransitionContext'
import BottomNav from '../components/BottomNav';

export default function ProjectOverview() {
    const { setPreset } = useContext(AppTransitionContext);

    const projectNameRef = useRef()
    const projectDescriptionRef = useRef()
    const projectColorRef = useRef()

    const { currentUser , updatePassword, updateEmail, logout } = useAuth()
    const { addProject , shareProjectWithUser, addHistoryEntryToProject,getCurrentProjectData } = useDB()
    const { projectId, projectName, projectColor, tasks, deleteTaskFromProject, projectOwner, projectOverview , assignProject} = useProject()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [color, setColor] = useState('#047AED');

    const history = useHistory()

    useEffect(() => {
        // TODO remove useEffect after testing
        console.log(projectOverview)
      },[]);
    
    async function handleToDashboard(){
        try {
            // await setPreset("fall")
            // await setPreset("newspaper")
            await setPreset("pushBottomPullTop")
            history.push('/')
        } catch (error) {
            console.log(error)
        }

    }

    async function handleToModifyProject(){
        await setPreset("fadeFromBottom")
        history.push('/modify-project')
    }

    async function handleSubmit(e){
        e.preventDefault()
        if (projectNameRef.current.value.length < 4) {
            return setError('Enter a suitable Projectname')
        }
        setLoading(true)
        setError('')
        console.log(projectNameRef.current.value,projectDescriptionRef.current.value,projectColorRef.current.value)
        //name, description, color, owner
        await addProject(projectNameRef.current.value,projectDescriptionRef.current.value,projectColorRef.current.value,currentUser.email)
        setLoading(false)
        await setPreset("cubeToTop")
        history.push('/')
    }

    async function handleSharingProject(){
        var email = window.prompt("Which email you wanna share?")
        if(email){
            const projectInfo = await shareProjectWithUser(email,projectId)
            const newProjectInfo = await getCurrentProjectData(projectId);
            const newProjectData = {
                id: projectId,
                data: newProjectInfo
            }
            await assignProject(newProjectData);
            }
    }

    async function handleCompleteTask(projectId,itemId, taskName){
        await addHistoryEntryToProject(currentUser.email,projectId, taskName)
        await deleteTaskFromProject(projectId,itemId)
        const newProjectInfo = await getCurrentProjectData(projectId);
            const newProjectData = {
                id: projectId,
                data: newProjectInfo
            }
        await assignProject(newProjectData);
    }

    async function handleTaskMenu(taskName){
        console.log(window.prompt(`Who you want to assign this ${taskName} Task?`));
    }

    async function handleLogout(){
        setError('')
        try {
            await logout()
            history.push('/login')
        } catch (error) {
            setError('Failed to log out')
        }

    }

    return (
        <section>
            <div className="container text-center">
                <div className="navbar-profile-top">
                    <div className="align-placeholder">
                        <Link className="align-left" onClick={handleToDashboard}><AiOutlineArrowLeft title={currentUser.email} color="red" size="1.5em"/></Link>
                    </div>
                     <div className="align-right">
                     {currentUser.email === projectOwner ?
                        <Link>
                            <BiShareAlt onClick={handleSharingProject} title={currentUser.email} color="red" size="1.5em"/>
                        </Link>
                        : ""}
                        <Link>
                            <AiFillEdit title={currentUser.email} onClick={handleToModifyProject} color="red" size="1.5em"/>
                        </Link>
                    </div> 
                </div>
                {/* <h5>Project Overview</h5> */}
                <h2>{projectName}</h2>
                <p className="separator" style={{backgroundColor:projectColor}}>&nbsp;</p>
                <ul className="task-listing">
                    {tasks.map((item,i) =>  (
                            <li key={i} className="task-list" >
                                <button onClick={() => handleCompleteTask(projectId,item.id,item.data.name)}>done</button><button onClick={() => handleTaskMenu(item.data.name)}>assign</button> <p onClick={() => window.prompt(`Name: ${item.data.name} \nDescription: ${item.data.description}`)}>{item.data.name}</p>
                                {/* <li>{item.data.name}|{item.id}</li> */}
                            </li>
                            ))}
                </ul>
                <BottomNav />
            </div>
        </section>
    )
}