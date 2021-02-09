import React, { useRef, useState, useContext,useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../service/AuthContext'
import { useDB } from '../service/DatabaseContext'
import { useProject } from '../service/ProjectContext'
import { AiOutlineArrowLeft, AiOutlinePlusCircle } from 'react-icons/ai'
import { AppTransitionContext } from '../service/AppTransitionContext'

export default function HistoryView() {
    const { setPreset } = useContext(AppTransitionContext);
    const history = useHistory()
    const { projectOverview} = useProject()
    const { projects } = useDB()
    const { currentUser } = useAuth()

    useEffect(() => {
        // TODO remove useEffect after testing
        console.log(projectOverview)
        console.log(projectOverview.data.history)
        projectOverview.data.history.map((item, index) => { console.log(item.task)})
      },[]);
    
    async function handleToBack(){
        try {
            // await setPreset("fall")
            await setPreset("moveToRightFromLeft")
            //history.push('/modify-project')
            history.goBack()
            // TODO set Dashboard & Taskboard seperate
            // await setPreset("cubeToTop")
        } catch (error) {
            console.log("ERROR HANDLETOBACK:")
            console.log(error);
        }

    }

    return (
        <section>
            <div className="text-center">
                <div className="navbar-profile-top">
                <Link className="align-left" onClick={handleToBack}><AiOutlineArrowLeft title={currentUser.email} color="red" size="1.5em"/></Link>
                    <h2>{projectOverview.data.name}</h2>
                    <p>History:</p>
                </div>
                <div className="navbar-placeholder">
                </div>
                <ul className="history-list text-left">
                    {projectOverview.data.history.map((item, index)=> <li key={index}>
                            <div className="flex-center-start">
                                <div><AiOutlinePlusCircle size="2em"/></div>
                                <div>
                                    <p>{item.datetime}</p>
                                    <p>{item.email}</p>
                                    <p>{item.task}</p>
                                </div>
                            </div>
                        </li>)}
                </ul>
                
            </div>
        </section>
    )
}