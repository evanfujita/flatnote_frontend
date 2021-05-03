import React from 'react'
import LoggedOut from '../navbar/LoggedOut'
import LoggedIn from '../navbar/LoggedIn'

class Navbar extends React.Component{

    handleClick = event => {
        debugger
    }

    render(){

        return(
            <div>
                <LoggedOut handleClick={this.handleClick} />
                <LoggedIn />
            </div>
        )
    }
}

export default Navbar