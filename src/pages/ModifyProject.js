import React, { useRef, useState, useContext,useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../service/AuthContext'
import { useDB } from '../service/DatabaseContext'
import { useProject } from '../service/ProjectContext'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AppTransitionContext } from '../service/AppTransitionContext'

export default function ModifyProject() {
    const { setPreset } = useContext(AppTransitionContext);

    const projectNameRef = useRef()
    const projectDescriptionRef = useRef()
    const projectColorRef = useRef()

    const { currentUser , updatePassword, updateEmail, logout } = useAuth()
    const { modifyProject } = useDB()
    const { projectOverview} = useProject()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [color, setColor] = useState('#047AED');

    const history = useHistory()

    useEffect(() => {
        // TODO remove useEffect after testing
        console.log(projectOverview)
      },[]);
    
    async function handleToBack(){
        try {
            // await setPreset("fall")
            await setPreset("cubeToLeft")
            // history.push('/')
            history.goBack()
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
        // name, description, color, owner
        // await modifyProject(projectNameRef.current.value,projectDescriptionRef.current.value,projectColorRef.current.value,currentUser.email)
        await setPreset("cubeToTop")
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
                        <Link className="align-left" onClick={handleToBack}><AiOutlineArrowLeft title={currentUser.email} color="red" size="1.5em"/></Link>
                    </div>
                    <h2>Busybag</h2>
                    <p>Keep track and do all</p>
                </div>
                <div className="navbar-placeholder">
                </div>
                <h2>Modify Project:</h2>
                <h3>{projectOverview.data.name}</h3>
                <strong>(Owner:{currentUser.email})</strong>
                <div className="createProject">
                    <form onSubmit={handleSubmit}>
                        {error && <h1>{error}</h1>}
                        <label className="flex">Projectname:</label>
                        <input type="text" placeholder="Projectname..." value={projectOverview.data.name} ref={projectNameRef} placeholder="Enter a Project Name"/>
                        <input type="text" placeholder="Projectdescription..." value={projectOverview.data.description} ref={projectDescriptionRef} placeholder="Describe your Project..."/>
                        <input type="color" value={projectOverview.data.color} onChange={e => setColor(e.target.value)} ref={projectColorRef} />
                        <label className="flex">Owner:</label><input type="text" placeholder="Projectowner..." value={projectOverview.data.owner} placeholder="Owner of the Project..."/>
                        <label className="flex">Shared:</label>{projectOverview.data.shared.map((user, index)=> <div className="flex" key={index}><button disabled>x</button>{user}</div>)}
                        <button type="submit" className="signin___button" disabled={loading}> Update </button>
                    </form>
                </div>
            </div>
        </section>
    )
}