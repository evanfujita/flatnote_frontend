import React from 'react'
import LoggedOut from '../navbar/LoggedOut'
import LoggedIn from '../navbar/LoggedIn'

class Navbar extends React.Component{

    render(){
        

        return(
            <div>
                <LoggedOut />
                {/* <LoggedIn handleClick={handleClick} /> */}
            </div>
        )
    }
}

export default Navbar