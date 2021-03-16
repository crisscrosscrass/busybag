import React, { useRef, useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../service/AuthContext'
import { useDB } from '../service/DatabaseContext'
import { useProject } from '../service/ProjectContext'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AppTransitionContext } from '../service/AppTransitionContext'
import Repeatmodal from '../components/Repeatmodal';

export default function CreateTask() {
    const { setPreset } = useContext(AppTransitionContext);

    const taskNameRef = useRef()
    const taskDescriptionRef = useRef()
    const projectRef = useRef()

    

    const { currentUser } = useAuth()
    const { projects, addTaskToProject } = useDB()
    const { projectId } = useProject()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [projectInit, setProjectInit] = useState(projectId)
    const [showRepeatmodal, setShowRepeatModal] = useState(false);

    const history = useHistory()
    
    async function handleToDashboard(){
        try {
            // await setPreset("fall")
            await setPreset("cubeToLeft")
            history.push('/')
            // TODO set Dashboard & Taskboard seperate
            // await setPreset("cubeToTop")
        } catch (error) {
        }

    }

    async function handleSubmit(e){
        e.preventDefault()
        if (taskNameRef.current.value.length < 4) {
            return setError('Enter a suitable Taskname')
        }
        setLoading(true)
        setError('')
        // console.log(projectRef.current.value,taskNameRef.current.value,taskDescriptionRef.current.value,currentUser.email)
        addTaskToProject(projectRef.current.value,taskNameRef.current.value,taskDescriptionRef.current.value,currentUser.email)
        setLoading(false)
        history.goBack()
    }

    function openRepeatModal(){
        setShowRepeatModal(!showRepeatmodal);
    }


    
    const amountTimeframeRef = useRef();
    const typeTimeframeRef = useRef();
    const endTimeframeRef = useRef();
    const [repeatFrame, setRepeatFrame] = useState("Once");
    var endRepeatFrame = {
        type:"never",
        value: "never",
    };
    const [weekDays, setWeekDays] = useState([
        {value: "Mo", state:false},
        {value: "Tu", state:false},
        {value: "We", state:false},
        {value: "Th", state:false},
        {value: "Fr", state:false},
        {value: "Sa", state:false},
        {value: "Su", state:false},
    ])
    function applyRepeatSettings(endRepeatFrame){
        // console.log(amountTimeframeRef.current.value);
        let timeFrame = typeTimeframeRef.current.value;
        let weekdays = "";
        if (timeFrame === "weeks") {
            weekdays +=" on";
            weekDays.map((item,i) => {
                if(item.state){
                    weekdays +=` ${item.value}`;
                } 
            })
        }
        if(amountTimeframeRef.current.value === "1"){
            timeFrame = timeFrame.substring(0, timeFrame.length - 1);
        }
        console.log(`Amount Repeat:${amountTimeframeRef.current.value}(every...)\nRepeat Type: ${typeTimeframeRef.current.value}\nEnding Type: ${endRepeatFrame.type}\nEnding Timeframe: ${endRepeatFrame.value}`)
        if(endRepeatFrame.type === "attempts" && endRepeatFrame.value === "1"){
            setRepeatFrame("Once");
        }else{
            setRepeatFrame(
                `every 
                ${amountTimeframeRef.current.value === "1" ? ` ${timeFrame}`: amountTimeframeRef.current.value + ` ${timeFrame}` }
                ${weekdays}
                ${endRepeatFrame.type === "date" ? `until ${endRepeatFrame.value}` : ""}
                ${endRepeatFrame.type === "attempts" ? ` ${endRepeatFrame.value}` + ' times' : ""}
                 `);
        }
        setShowRepeatModal(false);
    }

    return (
        <section>
            <Repeatmodal showModal={showRepeatmodal} setShowRepeatModal={setShowRepeatModal} amountTimeframeRef={amountTimeframeRef} typeTimeframeRef={typeTimeframeRef} endRepeatFrame={endRepeatFrame} applyRepeatSettings={applyRepeatSettings} weekDays={weekDays} setWeekDays={setWeekDays}/>
            <div className="container text-center">
                <div className="navbar-profile-top">
                    <div className="align-placeholder">
                        <Link className="align-left" onClick={handleToDashboard}><AiOutlineArrowLeft title={currentUser.email} color="red" size="1.5em"/></Link>
                    </div>
                    <h2>Busybag</h2>
                    <p>Keep track and do all</p>
                </div>
                <div className="navbar-placeholder">
                </div>
                <h2>Create Task</h2>
                <div className="createProject">
                    <div>
                        {error && <h1>{error}</h1>}
                        <input type="text" placeholder="Projectname..." ref={taskNameRef} placeholder="Enter a Task Name"/>
                        <input type="text" placeholder="Projectdescription..." ref={taskDescriptionRef} placeholder="Describe your taks..."/>
                        <div className="text-right">
                            <div>
                                Recurring? <button onClick={openRepeatModal}>{repeatFrame}</button>
                            </div>
                            <div>
                                Deadline? <button disabled>...</button>
                            </div>
                            <div>
                                Effort? <button disabled>...</button>
                            </div>
                            <div>
                                Assignee? <button disabled>...</button>
                            </div>
                            <div>
                                <select ref={projectRef} value={projectInit} onChange={(e) => setProjectInit(e.target.value)}>
                                {projects.map((item,i) =>  (
                                    <option key={i} value={item.id}>{item.data.name}</option>
                                    ))}
                                    </select>
                            </div>
                        </div>
                        <strong>Owner:</strong>{currentUser.email}
                        <button type="submit" className="signin___button" disabled={loading} onClick={handleSubmit}> Create </button>
                    </div>
                </div>
            </div>
        </section>
    )
}