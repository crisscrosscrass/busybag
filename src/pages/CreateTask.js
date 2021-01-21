import React, { useRef, useState, useContext,useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../service/AuthContext'
import { useDB } from '../service/DatabaseContext'
import { useProject } from '../service/ProjectContext'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AppTransitionContext } from '../service/AppTransitionContext'

export default function CreateTask() {
    const { setPreset } = useContext(AppTransitionContext);

    const taskNameRef = useRef()
    const taskDescriptionRef = useRef()
    const projectRef = useRef()

    const { currentUser , updatePassword, updateEmail, logout } = useAuth()
    const { projects, addTaskToProject } = useDB()
    const { projectId } = useProject()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [projectInit, setProjectInit] = useState(projectId)
    const [color, setColor] = useState('#047AED');

    const history = useHistory()
    
    async function handleToDashboard(){
        try {
            // await setPreset("fall")
            await setPreset("cubeToLeft")
            history.push('/')
            // TODO set Dashboard & Taskboard seperate
            // await setPreset("cubeToTop")
        } catch (error) {
        }

    }

    async function handleSubmit(e){
        e.preventDefault()
        if (taskNameRef.current.value.length < 4) {
            return setError('Enter a suitable Taskname')
        }
        setLoading(true)
        setError('')
        // console.log(projectRef.current.value,taskNameRef.current.value,taskDescriptionRef.current.value,currentUser.email)
        addTaskToProject(projectRef.current.value,taskNameRef.current.value,taskDescriptionRef.current.value,currentUser.email)
        setLoading(false)
        history.goBack()
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
                    <h2>Busybag</h2>
                    <p>Keep track and do all</p>
                </div>
                <div className="navbar-placeholder">
                </div>
                <h2>Create Task</h2>
                <div className="createProject">
                    <form onSubmit={handleSubmit}>
                        {error && <h1>{error}</h1>}
                        <input type="text" placeholder="Projectname..." ref={taskNameRef} placeholder="Enter a Task Name"/>
                        <input type="text" placeholder="Projectdescription..." ref={taskDescriptionRef} placeholder="Describe your taks..."/>
                        <div className="text-right">
                            <div>
                                Repeat? <button disabled>...</button>
                            </div>
                            <div>
                                Deadline? <button disabled>...</button>
                            </div>
                            <div>
                                Effort? <button disabled>...</button>
                            </div>
                            <div>
                                Assignee? <button disabled>...</button>
                            </div>
                            <div>
                                <select ref={projectRef} value={projectInit} onChange={(e) => setProjectInit(e.target.value)}>
                                {projects.map((item,i) =>  (
                                    <option key={i} value={item.id}>{item.data.name}</option>
                                    ))}
                                    </select>
                            </div>
                        </div>
                        <strong>Owner:</strong>{currentUser.email}
                        <button type="submit" className="signin___button" disabled={loading}> Create </button>
                    </form>
                </div>
            </div>
        </section>
    )
}