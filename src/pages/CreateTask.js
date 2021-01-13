import React, { useRef, useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../service/AuthContext'
import { useDB } from '../service/DatabaseContext'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AppTransitionContext } from '../service/AppTransitionContext'

export default function CreateTask() {
    const { setPreset } = useContext(AppTransitionContext);

    const taskNameRef = useRef()
    const taskDescriptionRef = useRef()
    const projectRef = useRef()

    const { currentUser , updatePassword, updateEmail, logout } = useAuth()
    const { projects, addTaskToProject } = useDB()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
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
        console.log(projectRef.current.value,taskNameRef.current.value,taskDescriptionRef.current.value,currentUser.email)
        addTaskToProject(projectRef.current.value,taskNameRef.current.value,taskDescriptionRef.current.value,currentUser.email)
        //name, description, color, owner
        // await addProject(taskNameRef.current.value,projectDescriptionRef.current.value,projectColorRef.current.value,currentUser.email)
        // setLoading(false)
        // await setPreset("cubeToTop")
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
                                Repeat? <button>...</button>
                            </div>
                            <div>
                                Deadline? <button>...</button>
                            </div>
                            <div>
                                Effort? <button>...</button>
                            </div>
                            <div>
                                Assignee? <button>...</button>
                            </div>
                            <div>
                                <select ref={projectRef}>
                                {projects.map((item,i) =>  (
                                    <option value={item.id}>{item.data.name}</option>                                
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