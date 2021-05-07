import React from 'react'
import LoggedOut from '../navbar/LoggedOut'
import { useSelector } from 'react-redux'
import LoggedIn from '../navbar/LoggedIn'

const Navbar = () => {
    const user = useSelector(state => state.user)


    return(
        <div>
            {user && user.id ? <LoggedIn /> : <LoggedOut />}
        </div>
    )
    
}

export default Navbar