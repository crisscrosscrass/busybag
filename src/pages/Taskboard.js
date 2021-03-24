import React, {useState, useRef,useContext,useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {useAuth} from '../service/AuthContext'
import { useProject } from '../service/ProjectContext'
import { AiFillSetting } from 'react-icons/ai'
import BottomNav from '../components/BottomNav'
import TopNav from '../components/TopNav'

export default function Taskboard() {
    const [error, setError] = useState('')
    const {currentUser} = useAuth()
    const { userTasks } = useProject()

    useEffect(() => {
        // TODO remove useEffect after testing
        
      },[]);   

    return (
        <section>
            <div className="container text-center">
                <TopNav />
                {error && <h1>{error}</h1>}
                <p>Assigned Task:</p>
                <ul className="task-listing">
                {
                    userTasks.map(
                        (task,i) => task.map( 
                            (item,j) => <li key={j} className="task-list" ><button >done</button><p>{item.data.name}</p></li>
                        )
                    )
                }
                </ul>

                
               
                <BottomNav />
            </div>
        </section>
    )
}
