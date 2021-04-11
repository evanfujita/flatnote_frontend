import React from 'react'
import { Menu } from 'semantic-ui-react'

class Navbar extends React.Component {
    render(){
        return(
            <Menu vertical>
                <p>Notes</p>
                <p>Profile</p>
                <p>Logout</p>
            </Menu>
        )
    }
}

export default Navbar