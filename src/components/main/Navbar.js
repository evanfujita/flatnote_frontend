import React from 'react'

class Navbar extends React.Component{

    handleClick = () => {
        console.log('clicked')
    }

    render(){
        return(
            <ul>
                <li class='navbar-item' name='Register' onClick={this.handleClick} >register</li>
                <li class='navbar-item' name='Login' onClick={this.handleClick} >login</li>
            </ul>
        )
    }
}

export default Navbar