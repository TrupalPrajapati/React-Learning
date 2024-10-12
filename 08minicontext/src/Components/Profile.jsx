import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

    const {user} = useContext(UserContext)

    if(!user){
        return <div>Plz Login</div>
    }
    else{
        return <div >Welcom {user.username}</div>
    }
    
}

export default Profile