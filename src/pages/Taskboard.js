import React, {useState, useRef} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {useAuth} from '../service/AuthContext'
import { AiFillSetting } from 'react-icons/ai'
import BottomNav from '../components/BottomNav'
import TopNav from '../components/TopNav'


export default function Taskboard() {
    const [error, setError] = useState('')
    const {currentUser} = useAuth()

    return (
        <section>
            <div className="container text-center">
                <TopNav />
                {error && <h1>{error}</h1>}
                <p>Some assign tasks here...</p>
                <BottomNav />
            </div>
        </section>
    )
}
