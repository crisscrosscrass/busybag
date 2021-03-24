import React, {useContext,useEffect,useState} from 'react';
import { /*Link*/ useHistory } from 'react-router-dom'
import { AppTransitionContext } from '../service/AppTransitionContext';
import { useProject } from '../service/ProjectContext';
import {useDB} from '../service/DatabaseContext';
import Loading from './Loading';

export default function ProjectSelection(props) {
    const { assignProject } = useProject()
    const history = useHistory()
    const { setPreset } = useContext(AppTransitionContext);
    const { projects, deleteProject, projectloading } = useDB()

    useEffect(() => {
        // TODO remove useEffect after testing
        
      },[]);

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
    console.log(projectloading)
    return (
        <div className="projects">
            {!projectloading && projects.map((project,i) =>  (
                        <div key={i} className="project" style={{backgroundColor:project.data.color}} onClick={() =>handleToProjectOverview(project)}>
                            <div>{project.data.name}</div>
                            {/* <button > Open </button> */}
                        </div>
                        ))}
            {projectloading && <h6>Loading...</h6>}
        </div>
    )
}
