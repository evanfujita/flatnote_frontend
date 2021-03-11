import React from 'react'
import { NavLink } from 'react-router-dom'

class Welcome extends React.Component {

    handleClick = (event) => {
        console.log(event.target.className)
        
    }

    render(){
        return(
            <div>
                <h3>Welcome!</h3>

                <NavLink to='/login'>Login</NavLink><br/>
                <NavLink to='/register'>Register</NavLink>
            </div>
        )
    }

}

export default Welcome