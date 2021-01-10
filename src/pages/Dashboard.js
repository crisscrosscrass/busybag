import React, {useState, useRef} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {useAuth} from '../service/AuthContext'
import {useTheme} from '../service/ThemeContext'
import {useDB} from '../service/DatabaseContext'
import { AiFillSetting } from 'react-icons/ai'
import Logo from '../components/Logo'
import BottomNav from '../components/BottomNav'
import TopNav from '../components/TopNav'


export default function Dashboard() {
    const [error, setError] = useState('')
    const {currentUser} = useAuth()
    const { themePrimary, toggleTheme } = useTheme()
    const { projects, addProject, deleteProject } = useDB()
    const history = useHistory()
    

    const nameRef = useRef()
    function changeColor(){
        toggleTheme(themePrimary)
    }

    function createProject(){
        console.log("Create a new Project")
        addProject(nameRef.current.value,currentUser.email)
    }
    function deleteFromProject(projectid){
        console.log(`Delete this project ${projectid} now`)
        deleteProject(projectid)
    }

    const styleTest = {
        backgroundColor: themePrimary,
    }

    return (
        <section>
            <div className="container text-center">
                <TopNav />
                <div className="main-container">
                    {error && <h1>{error}</h1>}
                    <div className="projects">
                        <div className="project">
                            <input type="text" placeholder="Name" ref={nameRef}/>
                            <button onClick={createProject} style={styleTest}>Create Project</button>
                        </div>
                        {projects.map((item,i) =>  (
                        <div key={i} className="project">
                            <div>{item.data.name}</div>
                            <button> Open </button>
                            <button onClick={()=>deleteFromProject(item.id)}> Delete </button>
                        </div>
                        ))}
                    </div>
                </div>
                {/* <div>
                    <button onClick={changeColor} style={styleTest}>ChangeColor</button>
                    <h1>{themePrimary}</h1>
                </div> */}
                <BottomNav />
            </div>
        </section>
    )
}
