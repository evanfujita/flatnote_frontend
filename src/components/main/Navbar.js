import React from 'react'

class Navbar extends React.Component{

    handleClick = () => {
        console.log('clicked')
    }

    render(){
        return(
            <ul>
                <li class='navbar' name='Register' onClick={this.handleClick} >register</li>
            </ul>
        )
    }
}

export default Navbar