import React, { useContext, useState, useEffect } from 'react'
import Loading from '../components/Loading'
import {firestore} from '../firebase'

export const ProjectContext = React.createContext()

export function useProject(){
    return useContext(ProjectContext)
}

export function ProjectProvider( {children} ) {
    const [projectId, setProjectId] = useState('')
    const [projectName, setProjectName] = useState('')
    const [projectColor, setProjectColor] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    const [projectOwner, setProjectOwner] = useState('')
    const [projectShared, setProjectShared] = useState([])
    const [projectOverview, setProjectOverview] = useState({})
    const [tasks, setTasks] = useState([])
    const [userTasks, setUserTasks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // console.log(projectName == ""? setLoading(false):setLoading(true));
        
        setLoading(false)        
    },[projectId])

    function loadProjectById(projectId){
        setProjectId(projectId);
    }

    async function assignProject(project){
        await loadingTasksFromProject(project.id)
        await setProjectId(project.id);
        await setProjectName(project.data.name)
        await setProjectColor(project.data.color)
        await setProjectDescription(project.data.description)
        await setProjectOwner(project.data.owner)
        await setProjectShared(project.data.shared)
        await setProjectOverview(project)
    }

    function loadingTasksFromProject(projectId){
        return firestore.collection(projectId)
        .onSnapshot(snapshop => {
            setTasks(
                snapshop.docs.map(
                    doc=>({id:doc.id,data:doc.data()})
                    )
                )
            setLoading(false)
            }
        )
        
    }

    
    async function assignTaskboard(userId){
        await loadingTasksFromUser(userId)
    }

    function loadingTasksFromUser(userId){
        firestore.collection('users').where("id", "==",userId).onSnapshot(snapshop => setUserTasks(
            snapshop.docs.map(
                doc=> doc.data().task.map(
                    item => ({id:item.id,data:item})
                    )
                )
            )
        )
        setLoading(false)
    }
    
    function deleteTaskFromProject(projectId,taskId){
        firestore.collection(projectId).doc(taskId).delete()
    }

    const value = {
        loadProjectById,
        assignProject,
        assignTaskboard,
        tasks,
        setTasks,
        userTasks,
        setUserTasks,
        projectName,
        projectColor,
        projectId,
        projectOwner,
        projectOverview,
        setProjectShared,
        loadingTasksFromProject,
        deleteTaskFromProject
    }

    return (
        <ProjectContext.Provider value={value}>
            {!loading && children}
        </ProjectContext.Provider>
    )
}