import React, { useContext, useState, useEffect } from 'react'
import {firestore} from '../firebase'

export const ProjectContext = React.createContext()

export function useProject(){
    return useContext(ProjectContext)
}

export function ProjectProvider( {children} ) {
    const [projectId, setProjectId] = useState('')
    const [projectName, setProjectName] = useState('')
    const [projectColor, setProjectColor] = useState('')
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setProjectId('')
        setProjectName('')
        setTasks([])
        setLoading(false)
    },[])

    function loadingTaskFromProject(projectId){
        firestore.collection(projectId).onSnapshot(snapshop => setTasks(
            snapshop.docs.map(
                doc=>({id:doc.id,data:doc.data()})
                )
            )
        )
        setLoading(false)
    }
    
    function deleteTaskFromProject(projectId,taskId){
        firestore.collection(projectId).doc(taskId).delete()
    }

    const value = {
        projectId,
        setProjectId,
        projectName,
        setProjectName,
        projectColor,
        setProjectColor,
        tasks,
        setTasks,
        loadingTaskFromProject,
        deleteTaskFromProject
    }

    return (
        <ProjectContext.Provider value={value}>
            {!loading && children}
        </ProjectContext.Provider>
    )
}