import React, { useRef, useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../service/AuthContext'
import { useDB } from '../service/DatabaseContext'
import { useProject } from '../service/ProjectContext'
import { AiFillSetting, AiOutlineArrowLeft, AiFillEdit } from 'react-icons/ai'
import { BiShareAlt } from 'react-icons/bi'
import { AppTransitionContext } from '../service/AppTransitionContext'
import BottomNav from '../components/BottomNav';

export default function ProjectOverview() {
    const { setPreset } = useContext(AppTransitionContext);

    const projectNameRef = useRef()
    const projectDescriptionRef = useRef()
    const projectColorRef = useRef()

    const { currentUser , updatePassword, updateEmail, logout } = useAuth()
    const { addProject , shareProjectWithUser, addHistoryEntryToProject } = useDB()
    const { projectId, projectName, projectColor, tasks, deleteTaskFromProject, projectOwner } = useProject()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [color, setColor] = useState('#047AED');

    const history = useHistory()
    
    async function handleToDashboard(){
        try {
            // await setPreset("fall")
            // await setPreset("newspaper")
            await setPreset("moveToBottomFromTop")
            history.push('/')
        } catch (error) {
            console.log(error)
        }

    }

    async function handleToModifyProject(){
        await setPreset("moveToLeftFromRight")
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
            shareProjectWithUser(email,projectId)
        }
    }

    async function handleCompleteTask(projectId,itemId, taskName){
        await addHistoryEntryToProject(currentUser.email,projectId, taskName)
        await deleteTaskFromProject(projectId,itemId)
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
                    {currentUser.email === projectOwner ? <div className="align-right">
                        <Link>
                            <BiShareAlt onClick={handleSharingProject} title={currentUser.email} color="red" size="1.5em"/>
                        </Link>
                        <Link>
                            <AiFillEdit title={currentUser.email} onClick={handleToModifyProject} color="red" size="1.5em"/>
                        </Link>
                    </div> : ""}
                    <h2>Busybag</h2>
                    <p>Keep track and do all</p>
                </div>
                <div className="navbar-placeholder">
                </div>
                {/* <h5>Project Overview</h5> */}
                <h2>{projectName}</h2>
                <p className="separator" style={{backgroundColor:projectColor}}>&nbsp;</p>
                <ul className="task-listing">
                    {tasks.map((item,i) =>  (
                            <li key={i} className="task-list" >
                                <button onClick={() => handleCompleteTask(projectId,item.id,item.data.name)}>done</button> <p>{item.data.name}</p>
                                {/* <li>{item.data.name}|{item.id}</li> */}
                            </li>
                            ))}
                </ul>
                <BottomNav />
            </div>
        </section>
    )
}