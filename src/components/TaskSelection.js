import React, {useContext,useEffect,useState} from 'react';
import { /*Link*/ useHistory } from 'react-router-dom'
import { AppTransitionContext } from '../service/AppTransitionContext';
import { useAuth } from '../service/AuthContext'
import { useProject } from '../service/ProjectContext';
import {useDB} from '../service/DatabaseContext';
import Loading from './Loading';

export default function TaskSelection(props) {
    const history = useHistory()
    const { setPreset } = useContext(AppTransitionContext);
    const { currentUser , updatePassword, updateEmail, logout } = useAuth()
    const { addProject , shareProjectWithUser, addHistoryEntryToProject,getCurrentProjectData } = useDB()
    const { projectId, projectName, projectColor, tasks, deleteTaskFromProject, projectOwner, projectOverview , assignProject} = useProject()
    const { enterProject, setEnterProject} = useState('');

    function displayDateReached(displayDate,currentDate){
        return +new Date(displayDate) <= +new Date(currentDate);
    }

    useEffect(() => {
        // TODO remove useEffect after testing
        console.log(projectId)
      },[]);

    //   console.log(props);
    //   console.log(tasks);
    //   console.log(projectId);
    //   tasks.map((item,i) => {
    //       if ('repeatSettings' in item.data){
    //           console.log(`${item.data.name} contains repeat function!`)
    //           var currentdate = new Date(); 
    //           // date + 1
    //           // currentdate.setDate(currentdate.getDate() + 1);
    //           var datetime = currentdate.getFullYear() + "-"
    //           + (currentdate.getMonth()+1)  + "-" 
    //           + currentdate.getDate();
    //           console.log('today: ',datetime)
    //           console.log(item.data.repeatSettings);
    //           console.log(datetime === item.data.repeatSettings['display date'])
    //           /* compare Dates:
    //           const x = new Date('2013-05-23');
    //           const y = new Date('2013-05-23');
  
    //           // less than, greater than is fine:
    //           console.log('x < y', x < y); // false
    //           console.log('x > y', x > y); // false
    //           console.log('x === y', x === y); // false, oops!
  
    //           // anything involving '=' should use the '+' prefix
    //           // it will then compare the dates' millisecond values
    //           console.log('+x <= +y', +x <= +y); // true
    //           console.log('+x >= +y', +x >= +y); // true
    //           console.log('+x === +y', +x === +y); // true
    //           */
    //           console.log('task display Date isBefore or isSame to today?', +new Date(item.data.repeatSettings['display date']) <= +new Date(datetime));
    //           console.log(displayDateReached(item.data.repeatSettings['display date'],datetime))
    //       }
    //   })

    async function handleCompleteTask(projectId,itemId, taskName){
        console.log(projectId);
        console.log(projectId,itemId, taskName);
        await addHistoryEntryToProject(currentUser.email,projectId, taskName)
        await deleteTaskFromProject(projectId,itemId)
        const newProjectInfo = await getCurrentProjectData(projectId);
            const newProjectData = {
                id: projectId,
                data: newProjectInfo
            }
        await assignProject(newProjectData);
    }

    async function handleTaskMenu(taskName){
        console.log(window.prompt(`Who you want to assign this '${taskName}' Task?`));
    }

    async function handleToProjectOverview(project){
        try {
            console.log(project.id)
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
    var currentdate = new Date(); 
    var datetime = currentdate.getFullYear() + "-"
    + (currentdate.getMonth()+1)  + "-" 
    + currentdate.getDate();
    return (
        <ul className="task-listing">
        {tasks.filter((item, i) => {
            if('repeatSettings' in item.data && displayDateReached(item.data.repeatSettings['display date'],datetime)){
                return item;
            }
            if(!('repeatSettings' in item.data)){
                return item;
            }
        }).map((item,i) => 
            <li key={i} className="task-list" >
                <button onClick={() => handleCompleteTask(projectId,item.id,item.data.name)}>done</button>
                <button onClick={() => handleTaskMenu(item.data.name)}>assign</button> 
                <p onClick={() => window.prompt(`Name: ${item.data.name} \nDescription: ${item.data.description}`)}>{item.data.name}</p>
            </li>
            )
        }
        </ul>
    )
}
