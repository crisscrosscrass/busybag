import React, { useContext, useState , useEffect } from 'react'
import Loading from '../components/Loading'
import {auth,provider} from '../firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider( {children} ) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email,password)
    }

    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }

    function loginWithGoogle(){
        return auth.signInWithPopup(provider)
    }

    function logout(){
        return auth.signOut()
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email){
        return currentUser.updateEmail(email)
    }

    function updatePassword(password){
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        // auth.onAuthStateChanged(function(user) {
        //     if (user) {
        //       // User is signed in.
        //       console.log(user)
        //       console.log(user.displayName)
        //       console.log(user.email)
        //       console.log(user.photoURL)
        //       console.log(user.emailVerified)
        //       console.log(user.uid)
        //     } else {
        //       // No user is signed in.
        //     }
        //   });

          
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    },[]) 

    const value = {
        currentUser,
        loading,
        login,
        logout,
        signup,
        resetPassword,
        updateEmail,
        updatePassword
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
            {loading && Loading}
        </AuthContext.Provider>
    )
}
