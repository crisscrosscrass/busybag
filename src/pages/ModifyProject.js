import React, { useRef, useState, useContext,useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../service/AuthContext'
import { useDB } from '../service/DatabaseContext'
import { useProject } from '../service/ProjectContext'
import { AiOutlineArrowLeft, AiOutlineUserAdd, AiOutlineUnorderedList } from 'react-icons/ai'
import { MdDeleteForever } from 'react-icons/md'
import { AppTransitionContext } from '../service/AppTransitionContext'

export default function ModifyProject() {
    const { setPreset } = useContext(AppTransitionContext);

    const projectNameRef = useRef()
    const projectDescriptionRef = useRef()
    const projectColorRef = useRef()
    const projectOwnerRef = useRef()

    const { currentUser , updatePassword, updateEmail, logout } = useAuth()
    const { modifyProject, deleteProject } = useDB()
    const { projectOverview} = useProject()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const [projectname, setProjectname] = useState('');
    const [projectdescription, setProjectdescription] = useState('');
    const [color, setColor] = useState('');

    const history = useHistory()

    useEffect(() => {
        // TODO remove useEffect after testing
        console.log(projectOverview)
        setProjectname(projectOverview.data.name)
        setProjectdescription(projectOverview.data.description)
        setColor(projectOverview.data.color)
      },[]);
    
    async function handleToBack(){
        try {
            // await setPreset("fall")
            await setPreset("moveToBottomFromTop")
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
        // console.log(projectNameRef.current.value,projectDescriptionRef.current.value,projectColorRef.current.value,currentUser.email)
        console.log(projectOverview)
        const newProjectDetails = {
            data : {
                name:projectNameRef.current.value,
                description: projectDescriptionRef.current.value,
                color: projectColorRef.current.value,
                owner: projectOwnerRef.current.value,
                shared: projectOverview.data.shared
            },
            id: projectOverview.id
        }
        console.log(newProjectDetails)
        await modifyProject(newProjectDetails)
        await setPreset("cubeToTop")
        setLoading(false)
        // history.goBack()
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

    async function handleToHistoryView(){
        await setPreset("moveToLeftFromRight")
        history.push('/history-view')
    }

    async function deleteFromProject(){
        if(window.confirm(`Delete everything including ${projectname}?`)){
            deleteProject(projectOverview.id)
            await setPreset("fall")
            history.push('/')
        }
    }

    return (
        <section>
            <div className="container text-center">
                <div className="navbar-profile-top">
                    <div className="align-placeholder">
                        <Link className="align-left" onClick={handleToBack}><AiOutlineArrowLeft title={currentUser.email} color="red" size="1.5em"/></Link>
                    </div>
                </div>
                <h2>Modify:</h2>
                <h3>{projectOverview.data.name}</h3>
                <strong>(Owner:{currentUser.email})</strong>
                <div className="container">
                    <button onClick={handleToHistoryView} className="history___button"><AiOutlineUnorderedList size="1em" /> History</button>
                </div>
                {currentUser.email === projectOverview.data.owner ? <div className="container">
                    <button type="submit" className="delete___button" onClick={()=>deleteFromProject()}> <MdDeleteForever size="1em" /> {projectOverview.data.name} </button>
                </div>
                
                :""}

                {currentUser.email === projectOverview.data.owner ? 
                <div className="createProject">
                    <form onSubmit={handleSubmit}>
                        {error && <h1>{error}</h1>}
                        <label className="flex">Projectname:</label>
                        <input type="text" placeholder="Projectname..." value={projectname} onChange={e => setProjectname(e.target.value)} ref={projectNameRef} placeholder="Enter a Project Name"/>
                        <input type="text" placeholder="Projectdescription..." value={projectdescription} onChange={e => setProjectdescription(e.target.value)} ref={projectDescriptionRef} placeholder="Describe your Project..."/>
                        <input type="color" value={color} onChange={e => setColor(e.target.value)} ref={projectColorRef} />
                        <label className="flex">Owner:</label><input type="text" placeholder="Projectowner..." value={projectOverview.data.owner} readOnly={projectOverview.data.owner} ref={projectOwnerRef} placeholder="Owner of the Project..."/>
                        <button type="submit" className="signin___button" disabled={loading}> Update </button>
                    </form>
                </div>
                : ""}
                
                
                <div className="container text-center">
                    <h1><AiOutlineUserAdd size="2.5em" /></h1>
                    <label className="flex">Shared:</label>{projectOverview.data.shared.map((user, index)=> <div className="flex" key={index}><button disabled>x</button>{user}</div>)}
                    <button>+ Add Member</button>
                </div>
            </div>
        </section>
    )
}