import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import Logo from '../components/Logo';
import { useAuth } from '../service/AuthContext'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }
        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        }catch{
            setError('Failed to create an Acccount')
        }
        setLoading(true)
    }

    return (
        <section>
            <div className="container text-center">
                <h2>Busybag</h2>
                <Logo/>
                <p>Keep track and do all</p>
                <div className="card">
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email" ref={emailRef}/>
                        <input type="password" placeholder="Password"ref={passwordRef}/>
                        <input type="password" placeholder="Password Confirm" ref={passwordConfirmRef}/>
                        {error && <h1>{error}</h1>}
                        <button type="submit" className="signin___button" disabled={loading}> Sign up </button>
                    </form>
                </div>
                <div>
                    Already have an account? <Link to="/login">Login</Link>
                </div>
            </div>
        </section>
    )
}
