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
    const [projectDescription, setProjectDescription] = useState('')
    const [projectOwner, setProjectOwner] = useState('')
    const [projectShared, setProjectShared] = useState([])
    const [projectOverview, setProjectOverview] = useState({})
    const [tasks, setTasks] = useState([])
    const [userTasks, setUserTasks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    },[])

    async function assignProject(project){
        setProjectId(project.id)
        loadingTasksFromProject(project.id)
        setProjectName(project.data.name)
        setProjectColor(project.data.color)
        setProjectDescription(project.data.description)
        setProjectOwner(project.data.owner)
        setProjectShared(project.data.shared)
        setProjectOverview(project)
    }

    function loadingTasksFromProject(projectId){
        firestore.collection(projectId).onSnapshot(snapshop => setTasks(
            snapshop.docs.map(
                doc=>({id:doc.id,data:doc.data()})
                )
            )
        )
        setLoading(false)
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