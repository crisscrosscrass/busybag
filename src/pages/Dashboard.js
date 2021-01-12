import React, {useState, useRef,useContext} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {useAuth} from '../service/AuthContext'
import {useTheme} from '../service/ThemeContext'
import {useDB} from '../service/DatabaseContext'
import { AiFillSetting } from 'react-icons/ai'
import Logo from '../components/Logo'
import BottomNav from '../components/BottomNav'
import TopNav from '../components/TopNav'
import { AiOutlinePlus } from 'react-icons/ai'
import { AppTransitionContext } from '../service/AppTransitionContext'


export default function Dashboard() {
    const [error, setError] = useState('')
    const {currentUser} = useAuth()
    const { themePrimary, toggleTheme } = useTheme()
    const { projects, deleteProject, addTaskToProject } = useDB()
    const history = useHistory()
    const { setPreset } = useContext(AppTransitionContext);
    

    const nameRef = useRef()
    function changeColor(){
        toggleTheme(themePrimary)
    }
    async function handleToProjectCreate(){
        try {
            await setPreset("cubeToBottom")
            history.push('/create-project')
            // TODO set Dashboard & Taskboard seperate
            // await setPreset("cubeToTop")
        } catch (error) {
            console.log(error)
        }
    }

    function handleTaskToProject(projectid,task,repeat){
        addTaskToProject(projectid,task,repeat)
    }
    function deleteFromProject(projectid,projectname){
        console.log(`Delete this project ${projectid} now`)
        if(window.confirm(`Delete everything on ${projectname}?`)){
            deleteProject(projectid)
        }
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
                        <button onClick={handleToProjectCreate} className="project flex-center">
                            <AiOutlinePlus size="4em"/>
                        </button>
                        {projects.map((item,i) =>  (
                        <div key={i} className="project" style={{backgroundColor:item.data.color}}>
                            <div>{item.data.name}</div>
                            <button onClick={()=>handleTaskToProject(item.id,"Geschirrspüler",false)}> Open </button>
                            <button onClick={()=>deleteFromProject(item.id,item.data.name)}> Delete </button>
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
