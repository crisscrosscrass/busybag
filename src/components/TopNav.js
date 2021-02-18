import React, {useContext} from 'react'
import { useHistory} from 'react-router-dom'
import {useAuth} from '../service/AuthContext'
import { AiFillSetting } from 'react-icons/ai'
import { AppTransitionContext } from '../service/AppTransitionContext'

export default function TopNav() {
    const { currentUser } = useAuth()
    const history = useHistory()
    const { setPreset } = useContext(AppTransitionContext);
    async function handleToProfile(){
        try {
            await setPreset("moveToLeftFromRight")
            history.push('/update-profile')
        } catch (error) {
        }

    }
    

    return (
        <div>
            <div className="navbar-top">
                <a className="align-right" onClick={handleToProfile}>
                        <AiFillSetting title={currentUser.email} color="red" size="1.5em"/>
                    </a>
                <div className="align-placeholder">
                </div>
                <h2>Busybag</h2>
                <p>Keep track and do all</p>
                <strong>Email:</strong>{currentUser.email}
            </div>
            <div className="navbar-placeholder">
                
            </div>
        </div>
    )
}
