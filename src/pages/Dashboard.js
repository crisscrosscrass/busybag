import React, {useState, useRef,useContext,useEffect} from 'react'
import { /*Link*/ useHistory } from 'react-router-dom'
import {useAuth} from '../service/AuthContext'
import {useTheme} from '../service/ThemeContext'
import {useDB} from '../service/DatabaseContext'
import { useProject } from '../service/ProjectContext'
import BottomNav from '../components/BottomNav'
import TopNav from '../components/TopNav'
import { AiOutlinePlus } from 'react-icons/ai'
import { AppTransitionContext } from '../service/AppTransitionContext'


export default function Dashboard() {
    const [error, setError] = useState('')
    const {currentUser} = useAuth()
    const { themePrimary, toggleTheme } = useTheme()
    const { projects, deleteProject, loading } = useDB()
    const { assignProject } = useProject()
    const history = useHistory()
    const { setPreset } = useContext(AppTransitionContext);


    useEffect(() => {
        // TODO remove useEffect after testing
        // console.log(projects)
      },[]);
    

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
    async function handleToProjectOverview(project){
        try {
            await assignProject(project);
            // await setPreset("newspaper")
            await setPreset("pushTopPullBottom")
            history.push('/project-overview')
            // TODO 
            // 1. set Dashboard & Taskboard seperate
            // 2. implement some load project by ID, and open only if user is shared to this particular project
            // await setPreset("cubeToTop")
        } catch (error) {
            console.log(error)
        }
    }
    function deleteFromProject(projectid,projectname){
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
                    {loading && <div>Loading Projects</div>}
                    {error && <h1>{error}</h1>}
                    <div className="projects">
                        {!loading && <button onClick={handleToProjectCreate} className="project flex-center">
                            <AiOutlinePlus size="4em"/>
                        </button>}
                        {projects.map((project,i) =>  (
                        <div key={i} className="project" style={{backgroundColor:project.data.color}} onClick={() =>handleToProjectOverview(project)}>
                            <div>{project.data.name}</div>
                            {/* <button > Open </button> */}
                            {/* <button onClick={()=>deleteFromProject(project.id,project.data.name)}> Delete </button> */}
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
