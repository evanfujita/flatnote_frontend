import React from 'react'
import LoggedOut from '../navbar/LoggedOut'
import LoggedIn from '../navbar/LoggedIn'

class Navbar extends React.Component{

    render(){
        const { handleClick } = this.props

        return(
            <div>
                <LoggedOut handleClick={handleClick} />
                <LoggedIn />
            </div>
        )
    }
}

export default Navbar