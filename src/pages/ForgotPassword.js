import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { useAuth } from '../service/AuthContext'

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function handleSubmit(e){
        e.preventDefault()
        
        try{
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        }catch{
            setError('Failed to reset Password')
        }
        setLoading(false)
    }

    return (
        <section>
            <div className="container text-center border">
                <h2>Busybag</h2>
                <Logo />
                <p>Keep track and do all</p>
                <div className="card">
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email" ref={emailRef}/>
                        {error && <h1>{error}</h1>}
                        {message && <h1>{message}</h1>}
                        <button type="submit" className="signin___button" disabled={loading}> Reset Password </button>  
                    </form>
                </div>
                <div>
                    Back to Login? <Link to="/login">Login</Link>
                </div>
                <div>
                    Need an account? <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </section>
    )
}