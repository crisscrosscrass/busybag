import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import Logo from '../components/Logo';
import { useAuth } from '../service/AuthContext'
import PWAPrompt from 'react-ios-pwa-prompt'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()
        
        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        }catch{
            setError('Failed to login via Acccount')
        }
        setLoading(true)
    }

    return (
        <section>
            <PWAPrompt />
            <div className="container text-center">
                <h2>Busybag</h2>
                <Logo />
                <p>Keep track and do all</p>
                <div className="card">
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email" ref={emailRef}/>
                        <input type="password" placeholder="Password"ref={passwordRef}/>
                        {error && <h1>{error}</h1>}
                        <Link to="/forgot-password" className="text-right">Forgot Password?</Link>
                        <button type="submit" className="signin___button" disabled={loading}> Login </button>
                    </form>
                </div>
                <div>
                    Need an account? <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </section>
    )
}
