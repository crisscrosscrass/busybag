import React, {useState, useContext,useEffect,lazy } from 'react'
import { /*Link*/ useHistory } from 'react-router-dom'
import {useAuth} from '../service/AuthContext'
import {useTheme} from '../service/ThemeContext'
import {useDB} from '../service/DatabaseContext'
import { useProject } from '../service/ProjectContext'
import BottomNav from '../components/BottomNav'
import TopNav from '../components/TopNav'
import { AiOutlinePlus } from 'react-icons/ai'
import { AppTransitionContext } from '../service/AppTransitionContext'
import ProjectSelection from '../components/ProjectSelection'
import Loading from '../components/Loading'



export default function Dashboard() {
    const [error, setError] = useState('')
    const {currentUser, loading} = useAuth()
    const { themePrimary, toggleTheme } = useTheme()
    const { projectloading } = useDB()
    const { assignProject } = useProject()
    const history = useHistory()
    const { setPreset } = useContext(AppTransitionContext);


    useEffect(() => {
        // TODO remove useEffect after testing
        
      },[]);

    
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
                        {!loading && <button onClick={handleToProjectCreate} className="project flex-center">
                                <AiOutlinePlus size="4em"/>
                            </button>}
                    </div>
                    <ProjectSelection />
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
