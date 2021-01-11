import React, { useRef, useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import logo from '../images/busy.png';
import { useAuth } from '../service/AuthContext'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AppTransitionContext } from '../service/AppTransitionContext'

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser , updatePassword, updateEmail, logout } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const { setPreset } = useContext(AppTransitionContext);
    async function handleToDashboard(){
        try {
            await setPreset("moveToRightFromLeft")
            history.push('/')
            // TODO set Dashboard & Taskboard seperate
            // await setPreset("cubeToTop")
        } catch (error) {
        }

    }

    function handleSubmit(e){
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        const promises = []
        setLoading(true)
        setError('')
        if(emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }
        if(passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }
        Promise.all(promises).then(() => {
            history.push('/')
        }).catch((error) => {
            setError('Failed to update account\n'+error)
            console.log(error)
        }).finally( () => {
            setLoading(false)
        })
    }

    async function handleLogout(){
        setError('')
        try {
            await logout()
            history.push('/login')
        } catch (error) {
            setError('Failed to log out')
        }

    }

    return (
        <section>
            <div className="container text-center">
                <div className="navbar-profile-top">
                    <div className="align-placeholder">
                        <Link className="align-left" onClick={handleToDashboard}><AiOutlineArrowLeft title={currentUser.email} color="red" size="1.2em"/></Link>
                    </div>
                    <h2>Busybag</h2>
                    <p>Keep track and do all</p>
                    <strong>Email:</strong>{currentUser.email}
                </div>
                <div className="navbar-placeholder">
                </div>
                <button onClick={handleLogout} >Logout</button>
                <h2>---</h2>
                <h2>Update</h2>
                <div className="card">
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email" ref={emailRef} defaultValue={currentUser.email}/>
                        <input type="password" placeholder="Password"ref={passwordRef} placeholder="Leave blank to keep the same"/>
                        <input type="password" placeholder="Password Confirm" ref={passwordConfirmRef} placeholder="Leave blank to keep the same"/>
                        {error && <h1>{error}</h1>}
                        <button type="submit" className="signin___button" disabled={loading}> Save </button>
                    </form>
                </div>
            </div>
        </section>
    )
}