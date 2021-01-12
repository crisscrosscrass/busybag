import React, { useRef, useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../service/AuthContext'
import { useDB } from '../service/DatabaseContext'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AppTransitionContext } from '../service/AppTransitionContext'

export default function CreateProject() {
    const { setPreset } = useContext(AppTransitionContext);

    const projectNameRef = useRef()
    const projectDescriptionRef = useRef()
    const projectColorRef = useRef()

    const { currentUser , updatePassword, updateEmail, logout } = useAuth()
    const { addProject } = useDB()

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
                <h2>Create Project</h2>
                <div className="createProject">
                    <form onSubmit={handleSubmit}>
                        {error && <h1>{error}</h1>}
                        <input type="text" placeholder="Projectname..." ref={projectNameRef} placeholder="Enter a Project Name"/>
                        <input type="text" placeholder="Projectdescription..." ref={projectDescriptionRef} placeholder="Describe your Project..."/>
                        <input type="color" value={color} onChange={e => setColor(e.target.value)} ref={projectColorRef} />
                        <strong>Owner:</strong>{currentUser.email}
                        <button type="submit" className="signin___button" disabled={loading}> Create </button>
                    </form>
                </div>
            </div>
        </section>
    )
}